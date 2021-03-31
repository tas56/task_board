const Button = (props) => {

    return (
        <div>
            <button onClick={()=>props.onClick(props.task.id)}
                    style={{color: "blue"}}
                    className={'btn'}
            >{props.text}</button>
        </div>
    );
}

export default Button;