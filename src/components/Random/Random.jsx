import './Random.css'

const Random = ({ min, max }) => {
    let randomResult = Math.floor(Math.random() * (max - min) + min)
    return <p className="randomResult"><b>Random Value between {min} and {max} = {randomResult}</b></p>
}

export default Random