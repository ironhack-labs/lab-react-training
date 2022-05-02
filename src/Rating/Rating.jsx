import './Rating.css'

const Rating = ({ children }) => {
    let roundRating = Math.round(children)

    if (roundRating === 5) {
        return <p>"★★★★★"</p>
    }
    if (roundRating === 4) {
        return <p>"★★★★☆"</p>
    }
    if (roundRating === 3) {
        return <p>"★★★☆☆"</p>
    }
    if (roundRating === 2) {
        return <p>"★★☆☆☆"</p>
    }
    if (roundRating === 1) {
        return <p>"★☆☆☆☆"</p>
    }
    if (roundRating === 0) {
        return <p>"☆☆☆☆☆"</p>
    }
}

export default Rating


