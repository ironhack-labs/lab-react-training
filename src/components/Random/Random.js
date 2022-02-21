import './Random.css'

const Random = ({ min, max }) => {

    const randomNum = Math.floor(Math.random()*(max-min)+min)

    return (
        <article className="randomNumber">
            <span>Random value between {min} and {max} =&gt; {randomNum}</span>
        </article>
    )
}

export default Random