import { useState, useEffect } from 'react';
//import axios from "axios";

import Navigation from "./Header/Navigation";
import TaskBoard from "./TaskBoard/TaskBoard";
import ListView from "./TaskBoard/ListView";
import AddTask from "./TaskBoard/AddTask";

import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {

    const [tasks,setTasks] = useState([]);
    //const [errorMessage,setErrorMessage] = useState('')

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
    const addTask = (task) => {
        const id = Math.floor(Math.random() * 1000) +1;
        const newTask = {id, ...task}
        setTasks([...tasks, newTask])
    }
    // Delete Task
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) =>
            task.id !== id))
    }

    const onUpdateTaskList = (newTaskList) => {
        setTasks({  newTaskList });
    }

    return (
        <div className={"container"}>
            <BrowserRouter>
                <Navigation />
                <div>
                    <Route path="/" exact render={ () =>
                        <TaskBoard tasks={tasks} onDelete={deleteTask} setTasks={setTasks} /> }
                        />
                    <Route path="/ListView" render={ () =>
                        <ListView tasks={tasks} onUpdateTaskList={onUpdateTaskList} /> }
                       />
                    <Route path="/AddTask" render={ () =>
                        <AddTask onAdd={addTask} /> } />
                </div>
            </BrowserRouter>
        </div>
    )

}

export default App;