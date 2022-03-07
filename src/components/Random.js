function Random(props) {
    let randomNmb = Math.floor(Math.random() * (props.max - props.min) + props.min)
    return <div className="box"> Random value between {props.min} and {props.max} = {randomNmb}</div>
}

export default Random