import React from 'react';
import RatingClass from '../Rating/Rating'

class DriverCardClass extends React.Component{

  render(){
    return (
      <article>
        <div className='driverCard'>
          <div>
            <img className='driverImg' src={this.props.img}></img>
          </div>
          <div className='container-column'>
            <p className="driver-name">{this.props.name}</p>
            <RatingClass>{this.props.rating}</RatingClass>
            <p>{this.props.car.model} - {this.props.car.licensePlate}</p>
          </div>
        </div>
      </article>
    )
  }
}

export default DriverCardClass