import React from 'react';

import TaskItem from "./TaskItem";

const RenderCard = props => {
    return (
        <div className="card" >
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{props.id}</h6>
                <p className="card-text">{props.type}</p>
                <a href="#" className="card-link">Link 1</a>
                <a href="#" className="card-link">Link 2</a>
            </div>
        </div>
    );
}

export default RenderCard;