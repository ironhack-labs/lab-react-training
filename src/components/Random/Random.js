function Random(props) {
    return (
        <div>
            <h3>Random value between {props.min} and {props.max} => { Math.random() * (props.max - props.min) + props.min}</h3>
        </div>
    )
}

export default Random