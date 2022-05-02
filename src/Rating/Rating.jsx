import './Rating.css'

const Rating = ({ children }) => {

    let ratingValue = Math.round(children)
    let stars = ratingValue

    if (ratingValue === 0) {
        stars = <h1>☆☆☆☆☆</h1>
    }
    if (ratingValue === 1) {
        stars = <h1>★☆☆☆☆</h1>
    }
    if (ratingValue === 2) {
        stars = <h1>★★☆☆☆</h1>
    }
    if (ratingValue === 3) {
        stars = <h1>★★★☆☆</h1>
    }
    if (ratingValue === 4) {
        stars = <h1>★★★★☆</h1>
    }
    if (ratingValue === 5) {
        stars = <h1>★★★★★</h1>
    }

    return (
        <div className='rating'>
            {stars}
        </div>

    )
}

export default Rating