const Rating = ({ children }) => {

    let roundedRating = Math.round(children)
    let stars = ''

    if (roundedRating === 0) {
        stars = "☆☆☆☆☆"
    } else if (roundedRating === 1) {
        stars = "★☆☆☆☆"
    } else if (roundedRating === 2) {
        stars = "★★☆☆☆"
    } else if (roundedRating === 3) {
        stars = "★★★☆☆"
    } else if (roundedRating === 4) {
        stars = "★★★★☆"
    } else if (roundedRating === 5) {
        stars = "★★★★★"
    }

    return (
        <article>
            <p>{stars}</p>
        </article>
    )
}

export default Rating
