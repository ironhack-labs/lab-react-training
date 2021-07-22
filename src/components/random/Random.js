
function Random(props) {
    return(
        <div className="ms-5 mt-2 container ">
            <p> Random number: {Math.floor(Math.random()* (props.max - props.min) + props.min)}</p>
        </div>
    )
}

export default Random