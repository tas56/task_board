import { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { FaPlus, FaMinus } from "react-icons/fa";
import axios from "axios";

import Header from './Header/Header'
import TaskBoard from "./TaskBoard/TaskBoard";
import ListView from "./TaskBoard/ListView";
import AddTask from "./TaskBoard/AddTask";

const App = () => {

    const [tasks,setTasks] = useState([]);
    const [expand, setExpand] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:5000/tasks')
            .then(res => {
                let data = res.data;
                setTasks(data);
            }).catch(error => {
                console.log(error);
        })
    }, []);

    // Add Task
    const addTask = (task) => {
        axios.post('http://localhost:5000/tasks', {
            title: task.title,
            description: task.description,
            type: task.type
        }).then(res => {
            let data = res.data;
            data.column = 'todo';
            setTasks([...tasks,data])

        }).catch(error => {
            console.log(error);
        });
        alert('Task added');
    }
    // Delete Task
    const deleteTask = (id) => {
        axios.delete(`http://localhost:5000/tasks/${id}`)
            .then(resp => {
                console.log(resp.data)
            }).catch(error => {
            console.log(error);
        });
        setTasks(tasks.filter((task) =>
            task.id !== id))
        alert('Task deleted');
    }
    // Update Task
    const updateTask = (task,id) => {
        axios.put(`http://localhost:5000/tasks/${id}`, {
            title: task.title,
            type: task.type,
            description: task.description,
            column: task.column
        }).then(resp => {
            setTasks([...tasks]);
            console.log(resp.data);
        }).catch(error => {
            console.log(error);
        });
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
                                   onUpdate={updateTask} /> }
                        />
                    <Route path="/ListView" render={ () =>
                        <ListView tasks={tasks}
                                  onDelete={deleteTask} /> }
                       />
                </div>
            </BrowserRouter>
        </div>
    )

}

export default App;