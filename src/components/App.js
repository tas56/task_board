import React from 'react';
import { useState } from 'react';
import axios from "axios";

import Navigation from "./Header/Navigation";
import TaskBoard from "./TaskBoard/TaskBoard";
import ListView from "./TaskBoard/ListView";
import AddTask from "./TaskBoard/AddTask";

import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {

    const [tasks,setTasks] = useState([]);
    const [errorMessage,setErrorMessage] = useState('')


    function componentDidMount() {
        this.getData();
    }

    function getData() {
        axios.get('http://my-json-server.typicode.com/bnissen24/project2DB/posts')
            .then(response => {
                setTasks({ tasks: response.data });
            }).catch(error => {
                setErrorMessage({ errorMessage: error.message });
        });
    }

    const onAddTask = (taskName) => {
        setTasks(
            tasks.push({
                title: taskName,
                id: tasks.length + 1,
                type: 'task',
                column: 'todo'
            }))

        this.setState({ tasks });
    }

    const onUpdateTaskList = (newTaskList) => {
        this.setState({ tasks: newTaskList });
    }

    return (
        <div>
            <BrowserRouter>
                <Navigation />
                <div>
                    <Route path="/" exact render={ () =>
                        <TaskBoard tasks={tasks} onUpdateTaskList={onUpdateTaskList} /> }
                        />
                    <Route path="/ListView" render={ () =>
                        <ListView tasks={tasks} onUpdateTaskList={onUpdateTaskList} /> }
                       />
                    <Route path="/AddTask" component={AddTask} />
                </div>
            </BrowserRouter>
        </div>
    )

}

export default App;