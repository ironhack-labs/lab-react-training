import './DriverCard.css'

function DriverCard({name, rating, img, car}) {

  function StarsRating(number) {
    if (number <= 0){
      return '☆☆☆☆☆'
    } else if (number <= 1.49){
      return '★☆☆☆☆'
    } else if (number <= 2.49){
      return '★★☆☆☆'
    } else if (number <= 3.49){
      return '★★★☆☆'
    } else if (number <= 4.49){
      return '★★★★☆'
    } else if (number >= 4.5){
      return '★★★★★'
    }
  }

  return (
    <div className="driver-card id-card-box d-flex justify-content-center my-3 p-4">{/**/}
      <img className='driver-img' src={img} alt="" />
      <div className="driver-info d-flex flex-column id-card-info p-3">
        <h3 className='driver-name'><strong>{name}</strong></h3>
        <span className='driver-rating'>{StarsRating(rating)}</span>
        <span>{car.model} - {car.licensePlate}</span>
      </div>
    </div>
  )
}

export default DriverCard;