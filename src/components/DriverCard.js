import React from 'react'
import IdCard from './IdCard';

const DriverCard = (props) => {
    console.log(props)
    const {name, rating, img, car} = props;
    let roundNum = Math.round(props.rating)
    const stars = {
        0: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Star_rating_0_of_5.png",
        1: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Star_rating_1_of_5.png",
        2: "https://upload.wikimedia.org/wikipedia/commons/9/95/Star_rating_2_of_5.png",
        3: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Star_rating_3_of_5.png",
        4: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Star_rating_4_of_5.png",
        5: "https://upload.wikimedia.org/wikipedia/commons/1/17/Star_rating_5_of_5.png" 
    }
  return (
    <div className='driverCard'>
        <img className='driverCardImg' src={img} alt='driverimage'/>
        <div className='driversInfo'>
            <h2>{name}</h2>
            <img className='driverStars' src={stars[roundNum]} />
            <p>{car.model} - {car.licensePlate}</p>
        </div>
    </div>
  )
}

export default DriverCard