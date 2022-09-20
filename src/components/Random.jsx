const Random = (props) => {
    let min = props.min
    let max = props.max
    let randomNumber = Math.floor(Math.random() * (max - min + 1) + min)
    return (
        <div className="randomNum">
            <p>Random number between {props.min} and {props.max} ====={'>'} {randomNumber}</p>
        </div>)
}

export default Random

