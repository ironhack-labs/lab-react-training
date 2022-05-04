import './rating.css'

const Rating = ({ children }) => {
    let ratingValue = Math.round(children)
    let stars = ''


    if (ratingValue === 0) {
        stars = '☆☆☆☆☆'
    } else if (ratingValue === 1) {
        stars = '★☆☆☆☆'
    } else if (ratingValue === 2) {
        stars = '★★☆☆☆'
    } else if (ratingValue === 3) {
        stars = '★★★☆☆'
    } else if (ratingValue === 4) {
        stars = '★★★★☆'
    } else if (ratingValue === 5) {
        stars = '★★★★★'
    }


    return (
        <article className="stars">
            {stars}
        </article>
    )
}
export default Rating




