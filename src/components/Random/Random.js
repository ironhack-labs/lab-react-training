import './Random.css'

const Random = ({ min, max }) => {

    let randomNum = parseInt(Math.random() * (max - min) + min)

    return (
        <p className="random">Random value between {min} and {max} => {randomNum}</p>
    )
}

export default Random