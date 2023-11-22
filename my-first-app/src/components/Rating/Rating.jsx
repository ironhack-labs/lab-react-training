const Rating = ({ children }) => {

    const starRating = Math.round(children)
    let rating

    if (starRating === 0) {
        rating = "☆☆☆☆☆"
    } else if (starRating === 1) {
        rating = "★☆☆☆☆"
    } else if (starRating === 2) {
        rating = "★★☆☆☆"
    } else if (starRating === 3) {
        rating = "★★★☆☆"
    } else if (starRating === 4) {
        rating = "★★★★☆"
    } else if (starRating === 5) {
        rating = "★★★★★"
    }

    return (
        <h2>{rating}</h2>
    )

}

export default Rating