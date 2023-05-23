import './Random.css'
const Random = ({ min, max }) => {
    return <p className="random">Random value between {min} and {max} => {Math.floor(Math.random() * (max - min + 1) + min)}</p>
}

export default Random