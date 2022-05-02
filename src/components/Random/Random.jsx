import './Random.css'

const Random = ({ min, max }) => {
    return (
        <div>
            <p>Random value between {min} and {max} ={Math.floor((Math.random() * (max - min + 1)) + min)}</p>
        </div>
    )
}

export default Random