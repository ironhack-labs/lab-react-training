function Rating({ children }) {
    const intRating = Math.round(children)
    let starsRating = ''
    if (intRating === 0) {
        starsRating = '☆☆☆☆☆'
    }
    else if (intRating === 1) {
        starsRating = '★☆☆☆☆'
    }
    else if (intRating === 2) {
        starsRating = '★★☆☆☆'
    }
    else if (intRating === 3) {
        starsRating = '★★★☆☆'
    }
    else if (intRating === 4) {
        starsRating = '★★★★☆'
    }
    else if (intRating === 5) {
        starsRating = '★★★★★'
    }
    return (
        <div>
            <p>{ starsRating }</p>
        </div>
    )
}

export default Rating