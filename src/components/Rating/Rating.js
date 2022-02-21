import './Rating.css'

const Rating = props => {
    const { children } = props

    const rating = Math.round(children)
    let starRating = ''

    if (rating === 0) {
        starRating = '☆☆☆☆☆'
        return <div>{starRating}</div>
    } else if (rating === 1) {
        starRating = '★☆☆☆☆'
        return <div>{starRating}</div>
    } else if (rating === 2) {
        starRating = '★★☆☆☆'
        return <div>{starRating}</div>
    } else if (rating === 3) {
        starRating = '★★★☆☆'
        return <div>{starRating}</div>
    } else if (rating === 4) {
        starRating = '★★★★☆'
        return <div>{starRating}</div>
    } else if (rating === 5) {
        starRating = '★★★★★'
        return <div>{starRating}</div>
    }
}

export default Rating