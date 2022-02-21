import "./Random.css"

function Random({ min, max }) {

    return (
        <article>
            <p>RANDOM VALUE BETWEEN {min} AND {max} IS EQUAL TO {Math.floor(Math.random() * (max - min + 1) + min)}</p>

        </article>


    )
}



export default Random