import React from 'react'

const DriverCard = ({name, rating, img, car}) => {
  const {model, licensePlate} = car;

  let roundedNumber = Math.round(rating);
  let display = "";

  switch (roundedNumber){
    case 0:
        display = "☆☆☆☆☆";
        break;
    case 1: 
        display = "★☆☆☆☆";
        break;
    case 2: 
        display = "★★☆☆☆";
        break;
    case 3: 
        display = "★★★☆☆";
        break;
    case 4: 
        display = "★★★★☆";
        break;
    case 5: 
        display = "★★★★★";
        break;
    default:
        break;
  }  

  return (
    <div className='driverCard'>
        <img src={img} alt='' />

        <div className='driverInfo'>
            <h3>{name}</h3>
            <p>{display}</p>
            <p>{model} - {licensePlate}</p>
        </div>
    </div>
  )
}

export default DriverCard