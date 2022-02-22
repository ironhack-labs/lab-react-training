
const Random = props => {
    return (
        <div className="blackBox">
            <h1>Random value between {props.min} and {props.max} =&#62; {Math.floor(props.min + Math.random()*(props.max-props.min))}</h1>
        </div>
    )
}

export default Random