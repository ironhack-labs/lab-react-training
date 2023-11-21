
const Rating = ({ children }) => {

    const roundingStars = Math.round(children)
    if (roundingStars === 0) {
        return <p>☆☆☆☆☆</p>
    } else if (roundingStars === 1) {
        return <p>★☆☆☆☆</p>
    } else if (roundingStars === 2) {
        return <p>★★☆☆☆</p>
    } else if (roundingStars === 3) {
        return <p>★★★☆☆</p>
    } else if (roundingStars === 4) {
        return <p>★★★★☆</p>
    } else if (roundingStars === 5) {
        return <p>★★★★★</p>
    }
    return null

}

export default Rating