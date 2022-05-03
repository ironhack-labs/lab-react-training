import './Random.css'

const Random = ({ min, max }) => {
    const randomNum = Math.floor(Math.random() * (max - min) + min)

    return (
        <p>Random value between {min} and {max}= {randomNum}</p>
    )
}

export default Random