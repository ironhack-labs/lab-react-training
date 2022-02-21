const Random = ({ min, max }) => {
    let number = Math.floor(Math.random() * (max - min + 1) + min)

    return (
        <article className="Random">
            <p>{number}</p>
        </article>
    )
}


export default Random