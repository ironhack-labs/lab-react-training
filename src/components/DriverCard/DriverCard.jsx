import "./DriverCard.css";

function DriverCard(props) {
    const {name, rating, img, car } = props;
    let starRating = Math.round(rating);
    const stars = [];
    
    for (let i = 0; i < 5; i++) {
      if (i < starRating) {
        stars.push(<span key={i}>★</span>);
      } else {
        stars.push(<span key={i}>☆</span>);
      }
    }

  return (
    <div className="driver-card">
        <div className="driver-picture">
            <img src={img} alt='driver pic' />
        </div>
        <div className="driver-info">
            <p><b>{name}</b></p>
            <p>{stars}</p>
            <p>{car.model} - {car.licensePlate}</p>
        </div>
    </div>
  )
}

export default DriverCard;