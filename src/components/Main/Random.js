function Random(props) {
    const {min, max} = props
    return (
        <div className="random">
            <p>Random value between {props.min} and {props.max} = {Math.floor(Math.random() * max) + min}  </p>
        </div>
    )
}

export default Random




