import './Random.css'

const Random = ({ min, max }) => {

    const number = Math.floor(Math.random() * (max - min + 1) + min)
    return (
        <div>
            <p> Random value between {min} and {max}  {number}</p>
        </div>
    )
}


export default Random;