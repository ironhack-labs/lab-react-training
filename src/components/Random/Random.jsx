import './Random.css'
const Random = ({ min, max }) => {

    function getRandom(min, max) {
        return Math.random() * (max - min);
    }
    const randomNumber = getRandom(min, max)

    return (

        <div className="random-value">

            <h3> Random value between {min} - {max} => {randomNumber}</h3>

        </div>

    )

}

export default Random