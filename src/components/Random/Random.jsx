import "./Random.css"

const Random = props => {

    const { min, max } = props
    const randomNumber = Math.floor(Math.random() * (max - min) + min)
    return (
        <div className="randomNumber">
            <span>Random value between {min} and {max} is {randomNumber}</span>
        </div>
    )
}

export default Random