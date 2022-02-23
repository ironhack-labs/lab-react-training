import './Random.css'

const Random = ({ min, max }) => {


    let randomNumber = Math.floor(Math.random() * (max - min)) + min

    return (
        <div className="random">
            <p>Random value between {min} and {max} = {randomNumber}</p>
        </div>

    )

}

export default Random