import TaskItem from './TaskItem';
import axios from "axios";

const COLUMN_NAMES = ['todo', 'in-progress', 'review', 'done'];

const TaskBoard = (props) => {


    const prevClick = (id) => {
        let task = props.tasks.find((task) => task.id === id);
        let columnIndex = COLUMN_NAMES.findIndex(name => task.column === name);

        columnIndex--;
        task.column = COLUMN_NAMES[columnIndex];

        updateColumn(task,id)

    }

    const nextClick = (id) => {
        let task = props.tasks.find((task) => task.id === id);
        let columnIndex = COLUMN_NAMES.findIndex(name => task.column === name);

        columnIndex++;
        task.column = COLUMN_NAMES[columnIndex];

        updateColumn(task,id)
    }

    const updateColumn = (task,id) => {
        axios.put(`http://localhost:5000/tasks/${id}`, {
            title: task.title,
            type: task.type,
            description: task.description,
            column: task.column
        }).then(resp => {
            props.setTasks([...props.tasks]);
            console.log(resp.data);
        }).catch(error => {
            console.log(error);
        });
    }

    const renderTaskItem = (task, setPrevious, setNext) => {
        return <TaskItem task={task}
                         prev={setPrevious}
                         next={setNext}
                         prevClick={prevClick}
                         nextClick={nextClick}
                         onDelete={props.onDelete} />
    }

    const todoItems = props.tasks.filter(task => task.column === 'todo')
        .map(task => {
            return renderTaskItem(task,null,"Start Work >")
        });

    const inprogressItems = props.tasks.filter(task => task.column === 'in-progress')
        .map(task => {
            return renderTaskItem(task,"< Send Back","Request Review >")
        });

    const reviewItems = props.tasks.filter(task => task.column === 'review')
        .map(task => {
            return renderTaskItem(task,"< More Work Required","Mark Done >")
        });

    const doneItems = props.tasks.filter(task => task.column === 'done')
        .map(task => {
            return renderTaskItem(task,"< Request Re-Review",null)
        });

    return (
        <div className="mb-5">
            <div className="row">
                <div className="col-lg-3">
                    <h3>Todo</h3>
                    { todoItems.length > 0 ? todoItems : "No items to do" }
                </div>
                <div className="col-lg-3">
                    <h3>In Progress</h3>
                    { inprogressItems.length > 0 ? inprogressItems : "No items in progress" }
                </div>
                <div className="col-lg-3">
                    <h3>Review</h3>
                    { reviewItems.length > 0 ? reviewItems : "No items to review" }
                </div>
                <div className="col-lg-3">
                    <h3>Done</h3>
                    { doneItems.length > 0 ? doneItems : "No items done" }
                </div>
            </div>
        </div>
    )
}

export default TaskBoard;