import {useState} from 'react'

const AddTask = (props) => {

    const [text, setText] = useState('')
    const [description, setDescription] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault();

        if(!text) {
            alert('Please add a task')
            return
        }

        props.onAdd({text,description,reminder})

        setText('')
        setDescription('')
        setReminder(false)
    }

    return (
        <div className="card bg-light mt-2">
            <div className="card-body">
        <form className={''} onSubmit={onSubmit}>
            <div className={'form-group'}>
                <label>Task</label>
                <input type={'text'}
                       placeholder={'Add Task'}
                       value={text}
                       className={'form-control'}
                       onChange={(e) => setText(e.target.value)} />
            </div>
            <div className={'form-group'}>
                <label>Description</label>
                <input type={'text'}
                       placeholder={'Add Description'}
                       value={description}
                       className={'form-control'}
                       onChange={(e) => setDescription(e.target.value)} />
            </div>

            <div className={'form-group'}>
                <label>Type</label>
                <select
                    className={'form-control'}
                    onChange={(e) => setText(e.currentTarget.checked)} >
                    <option value="task">task</option>
                    <option value="feature">feature</option>
                    <option value="bug">bug</option>
                </select>
            </div>
            <input className={'btn btn-primary float-right'} type={'submit'} value={'Save Task'} />
        </form>
            </div></div>
    )
}

export default AddTask;