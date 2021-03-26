import React from 'react';
import axios from "axios";

import Navigation from "./Header/Navigation";
import TaskBoard from "./TaskBoard/TaskBoard";
import ListView from "./TaskBoard/ListView";
import AddTask from "./TaskBoard/AddTask";

import { BrowserRouter, Route } from 'react-router-dom';

class App extends React.Component {

    state = {
        tasks: [],
        errorMessage: ''
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        axios.get('http://my-json-server.typicode.com/bnissen24/project2DB/posts')
            .then(response => {
                this.setState({ tasks: response.data });
            }).catch(error => {
            this.setState({ errorMessage: error.message });
        });
    }

    onAddTask = (taskName) => {
        let tasks = this.state.tasks;
        tasks.push({
            title: taskName,
            id: this.state.tasks.length + 1,
            type: 'task',
            column: 'todo'
        });

        this.setState({ tasks });
    }

    onUpdateTaskList = (newTaskList) => {
        this.setState({ tasks: newTaskList });
    }


   render() {
       return (
           <div>
               <BrowserRouter>
                   <Navigation />
                   <div>
                       <Route path="/" exact render={ () =>
                           <TaskBoard tasks={this.state.tasks} onUpdateTaskList={this.onUpdateTaskList} /> }
                       />
                       <Route path="/ListView" render={ () =>
                           <ListView tasks={this.state.tasks} onUpdateTaskList={this.onUpdateTaskList} /> }
                       />
                       <Route path="/AddTask" component={AddTask} />
                   </div>
               </BrowserRouter>
           </div>
       )
   }
}

export default App;