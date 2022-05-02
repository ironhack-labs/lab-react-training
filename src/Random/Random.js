import "./Random.css"

const Random = ({ min, max }) => {

    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    return (

        <div className="random">
            <p> Random number {min} and {max} = {getRandom(min, max)}</p>

        </div>

    )

}

export default Random