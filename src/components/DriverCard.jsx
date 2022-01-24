import React from 'react';

const DriverCard = (props) => {
    const star = () =>{
        for( let i=0;i<5;i++)
        if(i = 0){
            return "☆☆☆☆☆"
        }else if(i=1){
            return "★☆☆☆☆"
        }else if(i=2){
            return "★★☆☆☆"
        }else if(i=3){
            return "★★★☆☆"
        }else if(i=4){
            return "★★★★☆"
        }else return "★★★★★"
    }
  return (
  <div className='driverC' style={{backgroundColor:'blue',border:'20px'}}>
  <p>{props.name}</p>
  <p>{star(Math.round(props.rating))}</p>
  <img style={{height:"80px",width:"80px",borderRadius:'50%'}} src={props.img} alt={props.name}></img>
  <p>{props.car.model}-{props.car.licensePlate}</p>

  </div>
  );
};

export default DriverCard;
