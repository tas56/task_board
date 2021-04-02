import {useState} from 'react'

const AddTask = (props) => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [type, setType] = useState('task')
    const [column, setColumn] = useState('todo')

    const onSubmit = (e) => {
        e.preventDefault();

        if(!title) {
            alert('Please add a task')
            return
        }

        props.onAdd({title,description,type, column})

        setTitle('')
        setDescription('')
        setType('')
        setColumn('todo')
    }

    return (
        <div className="card bg-light mt-2 mb-4">
            <div className="card-body">
                <form className={''} onSubmit={onSubmit}>

                    <div className={'form-group'}>
                        <label>Task</label>
                        <input type={'text'}
                               placeholder={'Add Task'}
                               value={title}
                               className={'form-control'}
                               onChange={(e) => setTitle(e.target.value)} />
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
                            onChange={(e) => setType(e.target.value)} >
                            <option value="task">task</option>
                            <option value="feature">feature</option>
                            <option value="bug">bug</option>
                        </select>
                    </div>

                    <input className={'btn btn-primary float-right'} type={'submit'} value={'Save Task'} />
                </form>
            </div>
        </div>
    )
}

export default AddTask;