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
                                       data-toggle="tooltip"
                                       data-placement="bottom"
                                       title="collapse"
                                       onClick={() => setExpand(!expand)} />
                : <FaChevronDown style={{cursor:'pointer'}}
                                 data-toggle="tooltip"
                                 data-placement="bottom"
                                 title="expand"
                                 onClick={() => setExpand(!expand)} /> }
                <FaTimes
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Delete task"
                    className="ml-2"
                    style={{color:'red', opacity: .5, cursor:'pointer'}}
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
                <div className="row d-flex justify-content-between">
                    <Button onClick={props.prevClick}
                            className={'pull-left btn'}
                            style={{fontSize: '12px', color: 'blue'}}
                            task={props.task}
                            text={props.prev} />
                    <Button onClick={props.nextClick}
                            className={'pull-right btn'}
                            style={{fontSize: '12px', color: 'blue'}}
                            task={props.task}
                            text={props.next} />
                </div>
            </div>
        </div>
    )
};

export default TaskItem;