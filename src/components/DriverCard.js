import './DriverCard.css'

function DriverCard(props) {
    const {name, rating, img, car} = props.driver
    let ratingStars = ""

    if(rating === 0) {
        ratingStars = "☆☆☆☆☆"
    } else if (rating < 2) {
        ratingStars = "★☆☆☆☆"
    } else if (rating < 3) {
        ratingStars = "★★☆☆☆"
    } else if (rating < 4) {
        ratingStars = "★★★☆☆"
    } else if (rating < 5) {
        ratingStars = "★★★★☆"
    } else {
        ratingStars = "★★★★★"
    }

    return (
      <div className="DriverCard">
        <div>
            <img src={img} alt= "Driver face" />
        </div>
        <div>
            <p>{name}</p>
            <p>{ratingStars}</p>
            <small>{car.model} - {car.licensePlate}</small>
        </div>
      </div>
    );
}

export default DriverCard;