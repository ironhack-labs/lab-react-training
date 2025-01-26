import './Random.css'

function Random (props){
    function randomNum(min,max){
        min = Math.ceil(min);
        max = Math.floor(max);
    
        // Generate a random integer between min and max (inclusive)
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return (
        <div className="randomDiv">
            <p>Random value betweet {props.min} and {props.max} == {randomNum(props.min,props.max)} </p>
        </div>
    )
}

export default Random;