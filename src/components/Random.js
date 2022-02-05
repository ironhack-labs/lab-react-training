


function Random(props) {
    let result = Math.floor(Math.random() * (props.max - props.min + 1)) + props.min;
    return (
        <div>
            <p>Random value between {props.min} and {props.max} => {result}</p>
        </div>
    )
}

export default Random;