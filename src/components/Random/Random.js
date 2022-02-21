import "./Random.css"

const Random = props => {
    const { max, min } = props

    return (
        <article>
            <span className="randomCard">Random number between {min} and {max} => {(Math.floor(Math.random() * (max - min) + min))}</span>
        </article>
    )
}
export default Random