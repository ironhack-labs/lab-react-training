const Random = props => {
    const { min, max } = props

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    return (
        <div>
            <p className="Idcard">{`Random value between ${min} and ${max} => ${getRandomInt(min, max)}`}</p>
        </div>

    )
}

export default Random