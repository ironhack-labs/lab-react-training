import './Random.css'

const Random = ({ min, max }) => {
    return <h2 className="border">Random value between {min} and {max} => {Math.floor(Math.random() * (max - min) + min)}</h2>
}

export default Random