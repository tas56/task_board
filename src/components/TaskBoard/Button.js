const Button = (props) => {

    return (
        <div>
            <button onClick={()=>props.onClick(props.task.id)}
                    style={props.style}
                    className={props.className}
            >{props.text}</button>
        </div>
    );
}

export default Button;