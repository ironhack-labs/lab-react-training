import './Random.css'

const Random = ({ min, max }) => {
    console.log(min)
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
    return (
        <p className="random">Random value between {min} and {max} = {randomNumber}</p>
    )
}

export default Random