import React, { Component } from 'react';

class DriverCard extends Component {
  render() {
    const { name, rating, img, car } = this.props;
    const rounded = Math.round(rating);

    let i = 0, stars = [];

    while(i < rounded) {
      stars.push('★');
      i++;
    }
    while(i < 5) {
      stars.push('☆')
      i++;
    }

    const style = {
      backgroundImage: `url(${img})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: '90px',
      width: '150px',
      height: '150px',
      margin: '30px'
    }
    return (
      <div className="driverCard">
        <div style={style}></div>
        <div>        
          <p>{name}</p>
          {
            stars.map((star) => {
              return <span>{star}</span>
            })
          }
          <p>{car.model} - {car.licensePlate}</p>
        </div>
      </div>
    );
  }
}

export default DriverCard;