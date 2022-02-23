
// Iteration 7 | Component: DriverCard
function DriverCard(props) {
    const {name, rating, img, car} = props
    const filledStars = Math.round(rating)
    const emptyStars = 5 - filledStars

  return (
    <div className="driver-card">
       <div className="driver-card-image">
       <img src={img} alt={name} style={{ width: 120 }}/>
       </div>
        <div className="driver-card-infor">
        <p>{name}</p>
        <p>{'★'.repeat(filledStars) + '☆'.repeat(emptyStars)}</p>
        <p>{car.model} - {car.licensePlate}</p>
        </div>
    </div>
  );
}

export default DriverCard;
