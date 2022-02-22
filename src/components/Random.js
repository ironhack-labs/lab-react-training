const Random = ({ min, max }) => {
    let ran = Math.floor(Math.random() * (max - min) + min)
    return (
        <article>
            <p>{ran}</p>
        </article>
    )
}

export default Random