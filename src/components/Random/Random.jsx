import './random.css'

const Random = (props) => {
    // find diff
    let difference = props.max - props.min;

    // generate random number 
    let rand = Math.random();

    // multiply with difference 
    rand = Math.floor(rand * difference);

    // add with min value 
    rand = rand + props.min;

    return (
        <div className="random-number">
            <p>Random value bettween {props.min} and {props.max} ={'>'} {rand}</p>
        </div>
    )
}


export default Random