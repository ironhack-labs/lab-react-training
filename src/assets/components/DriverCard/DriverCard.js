import React , {Component} from 'react';
import Rating from '../Rating/Rating';
import './DriverCard.css'

class DriverCard extends Component {
  // constructor(props){
  //   super(props)
  // }
  render() {
    return (
      <div className="container-driver-card">
        <div>
          <img className="img-driver" src={this.props.img} alt="driver-img"/>
        </div>
        <div>
        <h5>{this.props.name}</h5>
        {/* <div className="rating-driver">{this.props.rating}</div> */}
        <Rating>{this.props.rating}</Rating>
        <div>
          {this.props.car.model} - {this.props.car.licensePlate}
        </div>
        </div>
      </div>
    )
  }
}

export default DriverCard;

