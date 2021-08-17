import React, {Component} from 'react';
import Rating from './Rating'; 
class DriverCard extends Component {
    render() {
      return <div class="driverCard">
                <img className="driverImg" src={this.props.img}></img>
                <div className="driverProperties">    
                    <div className="driverName">{this.props.name}</div>
                    <div><Rating rating={this.props.rating}></Rating></div>
                    <div>{this.props.car.model} - {this.props.car.licensePlate}</div>
                </div>
             </div>
    }
}

export default DriverCard;