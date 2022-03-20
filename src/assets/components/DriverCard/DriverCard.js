import React , {Component} from 'react';
import Rating from '../Rating/Rating';
import './DriverCard.css'

class DriverCard extends Component {
  // constructor(props){
  //   super(props)
  // }
  render() {
    return (
      <div>
        <div>
          <img className="img-driver" src={this.props.img} alt="driver-img"/>
        </div>
        <h4>{this.props.name}</h4>
        <div className="rating-driver">{this.props.rating}</div>
        <Rating>{this.props.rating}</Rating>
        <div>
          {this.props.car.model} - {this.props.car.licensePlate}
        </div>
      </div>
    )
  }
}

export default DriverCard;

