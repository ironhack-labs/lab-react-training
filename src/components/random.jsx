const Random = (props) => {
    let min = props.min
    let max = props.max

    let randomNumber = Math.floor(Math.random() * (max - min)) + min

    return (
        <div className="random">
            <div className="generateRandom">
                <p>Random value between {props.min} and {props.max} = {randomNumber}</p>
            </div>
        </div>
    )
}

export default Random