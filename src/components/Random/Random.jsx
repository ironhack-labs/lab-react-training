import './Random.css'

const Random = ({ min, max }) => {

    let number = Math.round(Math.random() * (max - min) + min)


    return (
        <div className="random">Random value between {min} and {max} = {number}</div>
    )
}

export default Random
