import React from 'react';

class DriverCard extends React.Component {
    starsRate(number){
        number = number > 5 ? 5 : number
        let roundedNumber = Math.round(number)
        let options = {
           '0': '☆☆☆☆☆',
           '1': '★☆☆☆☆',
           '2': '★★☆☆☆',
           '3': '★★★☆☆',
           '4': '★★★★☆',
           '5': '★★★★★',
        }
        return options[roundedNumber]
    }
  render() {
    const { name, rating, img, car } = this.props;
    return (
      <div className='driverCard'>
      <div className='driverCardImg'>
        <img src={img} alt={img} />
      </div>
      <div className='driverCardInfo'>
        <h4>{name}</h4>
        <p>{this.starsRate(rating)}</p>
        <p>{car.model} | {car.licensePlate}</p>
      </div>
      </div>
    );
  }
}

export default DriverCard;
