import './DriverCard.css'
import Rating from '../Rating/Rating.js'

function DriverCard({name,img,rating,car,className}){
  const {model,licensePlate} = car

  return(
    <div className={`${className} driver-card p-3`}>
      <div className='col-5 p-0 me-2 d-flex justify-content-center align-items-end flex-column'>
        <img src={img} alt={name} className='driver-card-image' />
      </div>
      <div className='col-5 p-0 ms-2 justify-content-center align-items-start'>
        <h4 className='m-0'><strong>{name}</strong> </h4>
        <Rating>{rating}</Rating>
        <p className='m-0'>{model} - {licensePlate} </p>
      </div>
    </div>

  ) 
}

export default DriverCard