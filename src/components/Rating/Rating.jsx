import './Rating.css'

const Rating = ({ children }) => {

    const ratingRound = Math.round(Number(children))
    let stars = ""

    if (ratingRound === 0) {
        stars = "☆☆☆☆☆"
    }
    if (ratingRound === 1) {
        stars = "★☆☆☆☆"
    }
    if (ratingRound === 2) {
        stars = "★★☆☆☆"
    }
    if (ratingRound === 3) {
        stars = "★★★☆☆"
    }
    if (ratingRound === 4) {
        stars = "★★★★☆"
    }
    if (ratingRound === 5) {
        stars = "★★★★★"
    }

    return (
        <p>{stars}</p>
    )


}

export default Rating
