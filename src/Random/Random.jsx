import './Random.css'

const Random = ({ min, max }) => {

    let rand = (Math.random() * (max - min + 1)) + min

    let result = `Random value between ${min} and ${max} is ${Math.floor(rand)}`

    return (
        <div className="card-random">
            <p>{result}</p>
        </div>
    )
}

export default Random