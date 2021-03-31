import { useState } from 'react';
import {FaTimes, FaChevronDown, FaChevronUp} from 'react-icons/fa';
import Button from "./Button";

const TaskItem = props => {

    const [expand, setExpand] = useState(false);

    return (
        <div className="card bg-light mb-2">
            <div className="card-body">
                <div className="float-right" >
                {expand ? <FaChevronUp style={{cursor:'pointer'}}
                                       onClick={() => setExpand(!expand)} />
                : <FaChevronDown style={{cursor:'pointer'}}
                                 onClick={() => setExpand(!expand)} /> }
                <FaTimes
                    className="ml-2"
                    style={{color:'red', cursor:'pointer'}}
                    onClick={() => props.onDelete(props.task.id)}
                />
                </div>

                <h5 className="card-title">{props.task.title}</h5>

                {expand &&
                    <div>
                    <h6 className="card-subtitle mb-2 text-muted">ID: {props.task.id}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Type: {props.task.type}</h6>
                    <p>{props.task.description}</p>
                    </div>
                }

                <Button onClick={props.prevClick} task={props.task} text={props.prev} />
                <Button onClick={props.nextClick} task={props.task} text={props.next} />
            </div>
        </div>
    )
};

export default TaskItem;