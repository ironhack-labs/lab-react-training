import './Rating.css'

const Rating = ({ children }) => {
    let startRating
    if (children < 1) {
        startRating = "☆☆☆☆☆"
    }
    else if (children >= 1 && children < 1.5) {
        startRating = "★☆☆☆☆"
    }
    else if (children >= 1.5 && children < 2.5) {
        startRating = "★★☆☆☆"
    }
    else if (children >= 2.5 && children < 3.5) {
        startRating = "★★★☆☆"
    }
    else if (children >= 3.5 && children < 4.5) {
        startRating = "★★★★☆"
    }
    else {
        startRating = "★★★★★"
    }

    return (
        <div className='Rating'>
            <span>{startRating}</span>
        </div>

    )

}

export default Rating