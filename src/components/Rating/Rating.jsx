import './../Rating/Rating.css'

function Rating({ children }) {

    const paintStars = Math.round(children)
    const emptyStars = 5 - paintStars
    const stars = []

    for (let i = 0; i < paintStars; i++) {
        stars.push(<span key={i}>★</span>)
    }

    for (let i = 0; i < emptyStars; i++) {
        stars.push(<span key={5 - i}>☆</span>)
    }

    return (
        <article className="card-rate">
            < div className='rate' > {stars}</div >
        </article>

    )
}

export default Rating