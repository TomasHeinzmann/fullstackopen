const Content = (props) => {
        return (
        <div>
            <p>{props.parts[0].name} has exercises {props.parts[0].exercises}</p>
            <p>{props.parts[1].name} has exercises {props.parts[1].exercises}</p>
            <p>{props.parts[2].name} has exercises {props.parts[2].exercises}</p>
        </div>
    )
}

export default Content