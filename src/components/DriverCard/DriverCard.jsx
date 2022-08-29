import './DriverCard.css'

function DiverCard({ name, rating, img, car }) {

  const startRating = rating => {
    switch (Math.round(rating)) {
      case 1:
        return '★☆☆☆☆'
      case 2:
        return '★★☆☆☆';
      case 3:
        return '★★★☆☆';
      case 4:
        return '★★★★☆';
      case 5:
        return '★★★★★';
      default:
        return '☆☆☆☆☆'
    }
  }

  return (
    <div className='driver-card'>
      <div>
        <img src={img} alt="img" />
      </div>
      <div>
        <h2>{name}</h2>
        <h2>{startRating(rating)}</h2>
        <div className='d-flex flex-row'>
          <h4>{car.model} - {car.licensePlate}</h4>
        </div>
      </div>
    </div>
  )
}

export default DiverCard