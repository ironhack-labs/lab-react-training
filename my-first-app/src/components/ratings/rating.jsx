const Rating = ({ children }) => {
    const roundedValue = Math.round(Number(children))
    let stars = ''
    if (roundedValue == 0) {
        stars = "☆☆☆☆☆"
    } else if (roundedValue == 1) {
        stars = '★☆☆☆☆'
    } else if (roundedValue == 2) {
        stars = '★★☆☆☆'
    } else if (roundedValue == 3) {
        stars = '★★★☆☆'
    } else if (roundedValue == 4) {
        stars = '★★★★☆'
    } else {
        stars = '★★★★★'
    }

    return (
        <div className="rating">
            <p>{stars}</p>
        </div>

    )
}

export default Rating