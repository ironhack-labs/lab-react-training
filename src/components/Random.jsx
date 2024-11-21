const Random = ({ min, max }) => {
    const numberRandom = Math.floor(Math.random() * (max - min) + min)
    return (< p > Random value between{min}and{max}={numberRandom}</p >
    )
}


export default Random;