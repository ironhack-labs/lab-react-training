import './DriverCard.scss'

const DriverCard = ({ name, rating, img, car: { model, licensePlate} }) => {

  let ratingValue = Math.round(rating);
  let startsRatingValue = '★'.repeat(ratingValue) + '☆'.repeat(5 - ratingValue);

  return (
    <div className="driver-card">
      <img src={img} className="driver-card__img" alt="driver photo" />

      <div className="driver-card__info">
        <h1>{name}</h1>
        <h1>{startsRatingValue}</h1>
        <h1>{model} - {licensePlate}</h1>
      </div>     
    </div>
  )
}

export default DriverCard