const Random = ({ min, max }) => {

    let randomNumber = Math.random() * (max - min) + min
    const removedDecimal = Math.round(randomNumber);

    return (
        <article>
            <p>{removedDecimal}</p>
        </article>
    )
}

export default Random


