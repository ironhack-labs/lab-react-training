function Random (props) {

    let randomInteger = Math.floor(Math.random() * props.max) + props.min;

    return (
        <div className="Random">
            <p>Random value between {props.min} and {props.max} is {randomInteger}</p>
        </div>
    )
}
export default Random;