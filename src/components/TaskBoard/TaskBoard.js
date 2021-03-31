import TaskItem from './TaskItem';

const COLUMN_NAMES = ['todo', 'in-progress', 'review', 'done'];

const TaskBoard = (props) => {

    const prevClick = (id) => {
        let taskColumn = props.tasks.find((task) => task.id === id);
        let columnIndex = COLUMN_NAMES.findIndex(name => taskColumn.column === name);

            columnIndex--;
            taskColumn.column = COLUMN_NAMES[columnIndex];
            props.setTasks(taskColumn);

    }

    const nextClick = (id) => {
        let task = props.tasks.find((task) => task.id === id);
        let columnIndex = COLUMN_NAMES.findIndex(name => task.column === name);

            columnIndex++;
            task.column = COLUMN_NAMES[columnIndex];
            props.setTasks(task);
    }

    const todoItems = props.tasks.filter(task => task.column === 'todo')
        .map(task => {
            return <TaskItem task={task}
                             key={task.id}
                             type={task.type}
                             prevClick={prevClick}
                             next={"Start Work >"}
                             nextClick={nextClick}
                             onDelete={props.onDelete} />
        });

    const inprogressItems = props.tasks.filter(task => task.column === 'in-progress')
        .map(task => {
            return <TaskItem task={task}
                             prev={"< Send Back"}
                             prevClick={prevClick}
                             next={"Request Review >"}
                             nextClick={nextClick}
                             onDelete={props.onDelete} />
        });

    const reviewItems = props.tasks.filter(task => task.column === 'review')
        .map(task => {
            return <TaskItem task={task}
                             prev={"< More Work Required"}
                             prevClick={prevClick}
                             next={"Mark Done >"}
                             nextClick={nextClick}
                             onDelete={props.onDelete} />
        });

    const doneItems = props.tasks.filter(task => task.column === 'done')
        .map(task => {
            return <TaskItem task={task}
                             prev={"< Request Re-Review"}
                             prevClick={prevClick}
                             onDelete={props.onDelete} />
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