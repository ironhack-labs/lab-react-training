import './Random.css'

function Random({ min, max }) {
    return (
        <p className="randomizer">A random value between {min} and {max} : {Math.round(Math.random() * (max - min) + min)} </p>
    )
}

export default Random