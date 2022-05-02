import './Random.css'

const Random = ({ min, max }) => {
    return (
        <div>
            <p> {Math.floor(Math.random() * (max - min)) + min} = random number between {min} y {max} </p>
        </div>

    )
}

export default Random