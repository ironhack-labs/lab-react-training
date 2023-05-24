import './Random.css'

const Random = ({ min, max }) => {

    const num = Math.floor(Math.random() * (max - min + 1)) + min;

    return <p className="NumRandom">{num}</p>
}

export default Random