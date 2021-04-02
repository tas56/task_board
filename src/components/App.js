import { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { FaPlus, FaMinus } from "react-icons/fa";

import Header from './Header/Header'
import TaskBoard from "./TaskBoard/TaskBoard";
import ListView from "./TaskBoard/ListView";
import AddTask from "./TaskBoard/AddTask";

const App = () => {

    const [tasks,setTasks] = useState([]);
    const [expand, setExpand] = useState(false);

    useEffect(() => {
        const getTasks = async () => {
            const tasksFromServer = await fetchTasks()
            setTasks(tasksFromServer)
        }
        getTasks();
    }, []);

    const fetchTasks = async () => {
        const res = await fetch('http://localhost:5000/tasks');
        const data = await res.json()
        return data;
    }

    // Add Task
    const addTask = async (task) => {
        const res = await fetch('http://localhost:5000/tasks/', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })
        const data = await res.json()
        data.column = 'todo';

        setTasks([...tasks,data])
        alert('Task added');
    }
    // Delete Task
    const deleteTask = async (id) => {
        await fetch(`http://localhost:5000/tasks/${id}`,
            {method: 'DELETE'});
        setTasks(tasks.filter((task) =>
            task.id !== id))
    }

    return (
        <div>
            <BrowserRouter>
                <Header />
                <div className="container">
                    <div className="w-100 border-bottom mb-3">
                        <p onClick={() => setExpand(!expand)}
                           style={{cursor:'pointer'}}> Add Task
                        {expand ? <FaMinus data-toggle="tooltip"
                                               data-placement="bottom"
                                               title="collapse"
                                                className="ml-2" />
                            : <FaPlus data-toggle="tooltip"
                                             data-placement="bottom"
                                             title="add task"
                                             className="ml-2" /> }
                        </p>
                        {expand && <AddTask onAdd={addTask} /> }
                    </div>
                    <Route path="/" exact render={ () =>
                        <TaskBoard tasks={tasks}
                                   onDelete={deleteTask}
                                   setTasks={setTasks} /> }
                        />
                    <Route path="/ListView" render={ () =>
                        <ListView tasks={tasks}
                                  setTasks={setTasks} /> }
                       />
                </div>
            </BrowserRouter>
        </div>
    )

}

export default App;