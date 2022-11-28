import './Random.css'

const Random = props => {
    const { min, max } = props

    let result = Math.floor(Math.random() * (max - min) + min)

    return (
        <article className="Random">
            <h4>Random value between 1 and 6 - {result}</h4>
        </article>
    )
}

export default Random