import {useState} from "react";

const Filters = (props) => {

    const [status, setStatus] = useState();

    return(
        <div className="d-flex justify-content-around">
            <div className="form-group">
                <label htmlFor="sort">Sort</label>
                <select className="ml-2">
                    <option value="title">Id</option>
                    <option value="title">Title</option>
                    <option value="column">Status</option>
                    <option value="type">Type</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="status">Status</label>
                <select className="ml-2"
                        value={status}
                        onChange={(e) => {
                            setStatus(e.target.value)

                        }}>
                    <option value="">Select Status</option>
                    <option value="todo">To Do</option>
                    <option value="in-progress">In Progress</option>
                    <option value="review">Review</option>
                    <option value="done">Done</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="type">Type</label>
                <select className="ml-2"
                        onChange={(e) => {
                            setStatus(e.target.value)
                        }}>
                    <option value="">Select Type</option>
                    <option value="task">Task</option>
                    <option value="feature">Feature</option>
                    <option value="bug">Bug</option>
                </select>
            </div>

        </div>
    );
}

export default Filters;
