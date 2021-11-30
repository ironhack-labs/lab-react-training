import './Rating.css'

function Rating(props) {
    const {number} = props
    let rating = ""

    if(number === 0) {
        rating = "☆☆☆☆☆"
    } else if (number < 2) {
        rating = "★☆☆☆☆"
    } else if (number < 3) {
        rating = "★★☆☆☆"
    } else if (number < 4) {
        rating = "★★★☆☆"
    } else if (rating < 5) {
        rating = "★★★★☆"
    } else {
        rating = "★★★★★"
    }
    return (
      <div className="Rating">
        <h6>{rating}</h6>
      </div>
    );
}

export default Rating;