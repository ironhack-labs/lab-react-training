const DriverCard = (props) => {
  let stars = Math.round(props.rating)
  
  if(stars === 0){stars = '☆☆☆☆☆'} 
  else if(stars === 1){stars = '★☆☆☆☆'} 
  else if(stars === 2){stars = '★★☆☆☆'} 
  else if(stars === 3){stars = '★★★☆☆'} 
  else if(stars === 4){stars = '★★★★☆'} 
  else if(stars === 5){stars = '★★★★★'}

  return ( 
    <div className="driverCardContainer" >
      <div className="dirverCardImg" >
        <img src={props.img} width="150" height="150" alt="profile" />
      </div>
      <div className="dirverCardInfo" >
        <h1> {props.name} </h1>
        <p> {stars}  </p>
        <h5> {`${props.car.model} - ${props.car.licensePlate}`} </h5>
      </div>
    </div>
  );
}

export default DriverCard;