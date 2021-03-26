import React from 'react';

const TaskItem = props => {
    return (
        <div className="card border-0 bg-light">
            <div className="card-body">
                <h5 className="card-title">{props.task.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{props.task.key}</h6>
                <h6 className="card-subtitle mb-2 text-muted">{props.task.type}</h6>
                <a href="#" className="card-link">Prev</a>
                <a href="#" className="card-link float-right">Next</a>
            </div>
        </div>
        // <li className="list-group-item">
        //     { props.task.title }
        //     <button type="button"
        //             onClick={() => props.markDone(props.task)}
        //             className="btn btn-primary" style={{ float: 'right' }}>
        //         Done
        //     </button>
        // </li>
    )
};

export default TaskItem;