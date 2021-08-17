import React from 'react';
import Rating from './Rating';

class DriverCard extends React.Component {
    render(){
        return (
          <div className="driverCard">
            <img src={this.props.img} alt="driver photo" />
            <div className="driverInfo">
              <h2>{this.props.name}</h2>
              <Rating>{this.props.rating}</Rating>
              <p>
                {this.props.car.model} - {this.props.car.licensePlate}
              </p>
            </div>
          </div>
        );
    }
}

export default DriverCard