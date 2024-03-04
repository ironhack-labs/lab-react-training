function DriverCard({img, name, rating, car}) {

    const rateConversion = () => {

        rating = Math.round(rating)

        if (rating === 0) {
            return "☆☆☆☆☆"
        }
        else if (rating === 1) {
            return "★☆☆☆"
        }
        else if (rating === 2) {
            return "★★☆☆☆"
        }
        else if (rating === 3) {
            return "★★★☆☆"
        }
        else if (rating === 4) {
            return "★★★★☆"
        } 
        else{
            return "★★★★★"
        }
    }

  return (
    <div className="container-driverCard">
        <div className="container-driverCard-content">
            <div className="container-driverCard-image">
                <img src={img} alt="image" />
            </div>
            <div className="container-driverCard-text">
                <p className="title"><strong>{name}</strong></p>
                <div className="container-driverCard-stars">
                {rateConversion(rating)}
                </div>
                <p className="label">{car.model} {car.license}</p>
            </div>
        </div>
    </div>
  )
}

export default DriverCard