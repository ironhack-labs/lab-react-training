import './Random.css'
function Random(props) {
    return (
        <div><span className="spanRadom">Random number between {props.min} and {props.max} is: <>{Math.floor(Math.random() * (props.max - props.min + 1) + props.min)}</></span></div>)
}

export default Random;