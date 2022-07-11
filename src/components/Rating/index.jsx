import './rating.css'
const Rating = ({ children: rating }) => {
    rating = Math.round(rating)

    let ratingString
    switch (rating) {
        case 0:
            ratingString = '☆☆☆☆☆'
            break
        case 1:
            ratingString = '★☆☆☆☆'
            break
        case 2:
            ratingString = '★★☆☆☆'
            break
        case 3:
            ratingString = '★★★☆☆'
            break
        case 4:
            ratingString = '★★★★☆'
            break
        case 5:
            ratingString = '★★★★★'
            break
        default:
            ratingString = '☆★☆★☆'

    }
    return (
        <p className="rating">{ratingString}</p>
    )
}

export default Rating