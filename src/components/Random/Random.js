const Random = ({ min, max }) => {

    const getRandomNum = Math.floor((Math.random() * (max - min)) + min)

    return (
        <article className="Random">
            <h5>Random value between {min} and {max} = {getRandomNum}</h5>
        </article>
    )
}

export default Random