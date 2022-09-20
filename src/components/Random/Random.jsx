import './Random.css'
const Random = ({ min, max }) => {
    const rand = Math.floor(Math.random() * (max - min) + min)
    return (
        <div className="random">
            <p>Random value between {min} and {max} ={'>'} {rand} </p>
        </div>
    )
}

export default Random