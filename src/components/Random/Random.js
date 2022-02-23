import './Random.css'

const Random = (props) => {

    const { min, max } = props

    const randomNumber = Math.floor(Math.random() * (max - min) + min)
    return (
        <p className="random"> The random value between {min} and {max} is {randomNumber}</p>
    )
}

export default Random