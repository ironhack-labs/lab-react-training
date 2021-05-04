import React from 'react';

class DriverCard extends React.Component {
  render() {
    const cardRating = {
      0: `☆☆☆☆☆`,
      1: `★☆☆☆☆`,
      2: `★★☆☆☆`,
      3: `★★★☆☆`,
      4: `★★★★☆`,
      5: `★★★★★`,
    };

    const { name, rating, img, car } = this.props;
    return (
      <div className="driver-card">
        <div className="driver-card-objects">
          <img className="card-img" src={img} alt={name + '-img'} />
          <div className="card-data">
            <p>{name}</p>
            <p>{cardRating[Math.round(rating)]}</p>
            <p>
              {car.model} {car.licensePlate}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default DriverCard;
