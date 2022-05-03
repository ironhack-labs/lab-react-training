import './Rating.css'

const Rating = ({ children }) => {

    let ratingValue = Math.round(children)
    let stars = ''

    if (ratingValue === 0) {
        return stars = <div className="box-stars"><h1 className="stars">☆☆☆☆☆</h1></div>
    } else if (ratingValue === 1) {
        return stars = <div className="box-stars"><h1 className="stars">★☆☆☆☆</h1></div >
    } else if (ratingValue === 2) {
        return stars = <div className="box-stars"><h1 className="stars">★★☆☆☆</h1></div >
    } else if (ratingValue === 3) {
        return stars = <div className="box-stars"><h1 className="stars">★★★☆☆</h1></div >
    } else if (ratingValue === 4) {
        return stars = <div className="box-stars"><h1 className="stars">★★★★☆</h1></div >
    } else if (ratingValue === 5) {
        return stars = <div className="box-stars"><h1 className="stars">★★★★★</h1></div >

    }
}

export default Rating
