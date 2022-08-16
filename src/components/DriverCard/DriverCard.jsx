function DriverCard(props) {
    const{name, rating, img, car} = props;
    const rounded = Math.ceil(rating);
  let stars = [];
  for(let i= 0; i < 5; i++) {
    if(i < rounded){
        stars.push('★')
    } else{
        stars.push('☆')
    }
  }


  return (
    <div className="make-row">
    <img className='driverImg' src={img} alt="" />
    <div className="make-columm">
    <p>{name}</p>
    <p>{stars}</p>
    <p>{car.model} {car.licensePlate}</p>
    </div>
    </div>
    
  )
}

export default DriverCard