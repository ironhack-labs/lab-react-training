const DriverCard = (props) => {
  const { name, rating, img, car, scoreToStars } = props
  const stars = scoreToStars(rating)


  return (
    <div className="DriverCard">
      <div className="driver-image">
        <img src={img} alt="driverImg" />
      </div>
      <div>
        <p>{name}</p>
        <p>{stars}</p>
        <p>{car.model} {car.licensePlate}</p>
      </div>
    </div>
  );

}

export default DriverCard