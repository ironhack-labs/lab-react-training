import "./Random.css"

function Random({min, max}) {

    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min

    return (
        <div className="randomNumber">
            <p>Random value between {min} and {max} = {randomNumber}</p>
        </div>
    )
}

export default Random