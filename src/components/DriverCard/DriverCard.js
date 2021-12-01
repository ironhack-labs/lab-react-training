import React from 'react';
import './DriverCard.css';


const DriverCard = (props) => {
  const { name, rating, img, car } = props
  let stars = ""

  if (rating < 0.5) {
    stars = '☆☆☆☆☆';
  } else if (rating >= 0.5 && rating < 1.5) {
    stars = '★☆☆☆☆';
  } else if (rating >= 1.5 && rating < 2.5) {
    stars = '★★☆☆☆';
  } else if (rating >= 2.5 && rating < 3.5) {
    stars = '★★★☆☆';
  } else if (rating >= 3.5 && rating < 4.5) {
    stars = '★★★★☆';
  } else if (rating >= 4.5) {
    stars = '★★★★★';
  }

      return (
        <div className="driverCard">
            <div>
                <img src={img} alt="driverPic" />
            </div> 

            <div className="cardText">
                <p>{name}</p>
                <p>{stars}</p>
                <p>{car.model} - {car.licensePlate}</p>
            </div>
        </div>
    )
}

export default DriverCard