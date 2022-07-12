
const Random = ({ min, max }) => {

    return (
        <article>

            {Math.floor(Math.random() * (max - min) + min)}

        </article>
    )

}

export default Random 