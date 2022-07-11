import './Random.css'

const Random = ({ min, max }) => {

    return (
        <div className="minMax">
            <p> Random value between {min} and {max} {Math.floor(Math.random() * (max - min)) + min}</p>
        </div>
    )
}

export default Random