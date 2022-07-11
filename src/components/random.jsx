const Random = ({ min, max }) => {

    let randomNumber = Math.round(Math.random() * (max - min) + min)

    return (
        <article>

            <p>Random value between {min} and {max} is {randomNumber}</p>

        </article>
    )
}

export default Random