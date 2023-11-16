function Random(props) {

    function getRandomRange(min, max) {
        return Math.floor(Math.random() * (max - min) + min)        
    }

    return(
        <div className="Random">
            <p>Random value between {props.min} and {props.max} is {getRandomRange(props.min, props.max)}</p>
        </div>
    )
}

export default Random;