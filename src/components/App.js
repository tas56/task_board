import React from 'react';
import axios from "axios";

import Navigation from "./Header/Navigation";
import TaskBoard from "./TaskBoard/TaskBoard";
import TaskList from "./TaskList/TaskList";
import AddTask from "./AddTask/AddTask";

import { BrowserRouter, Route } from 'react-router-dom';

class App extends React.Component {
   render() {
       return (
           <div>
               <BrowserRouter>
                   <Navigation />
                   <div>
                       <Route path="/" exact component={TaskBoard} />
                       <Route path="/TaskList" component={TaskList} />
                       <Route path="/AddTask" component={AddTask} />
                   </div>
               </BrowserRouter>
           </div>
       )
   }
}

export default App;