import React from 'react';

import TaskItem from './TaskItem';

const TaskBoard = (props) => {

    const currentColumn = () => {
        let currentColumn = props.tasks.column;
        let index = 1;
        switch (currentColumn){
            case 'todo':
                index = 1;
                break;
            case 'inprogress':
                index = 2;
                break;
            case 'review':
                index = 3;
                break;
            case 'done':
                index = 4;
                break;
        } return index;
    }

    const markDone = (task) => {
        const taskIndex = props.tasks.findIndex(t => t.id === task.id);
        let taskList = props.tasks;
        taskList.splice(taskIndex, 1);
        props.onUpdateTaskList(taskList);
    }


    const todoItems = props.tasks.filter(task => task.column === 'todo')
        .map(task => {
            return <TaskItem task={task} key={task.id} type={task.type} markDone={markDone} />
        });

    const inprogressItems = props.tasks.filter(task => task.column === 'in-progress')
        .map(task => {
            return <TaskItem task={task} key={task.id} type={task.type} markDone={markDone} />
        });

    const reviewItems = props.tasks.filter(task => task.column === 'review')
        .map(task => {
            return <TaskItem task={task} key={task.id} type={task.type} markDone={markDone} />
        });

    const doneItems = props.tasks.filter(task => task.column === 'done')
        .map(task => {
            return <TaskItem task={task} key={task.id} type={task.type} markDone={markDone} />
        });

    return (
        <div className="">
            <div className="row">
                <div className="col-md-3">
                    <h3>Todo</h3>
                    { todoItems }
                </div>
                <div className="col-md-3">
                    <h3>In Progress</h3>
                    { inprogressItems }
                </div>
                <div className="col-md-3">
                    <h3>Review</h3>
                    { reviewItems }
                </div>
                <div className="col-md-3">
                    <h3>Done</h3>
                    { doneItems }
                </div>
            </div>
        </div>
    )
}

export default TaskBoard;