import './Random.css'
const Random = ({ min, max }) => {

    const rdmNumber = Math.floor(Math.random() * (max - min + 1)) + min

    return (
        <div className="randomCard">
            <p>{rdmNumber}</p>
        </div>

    )
}

export default Random