import React from "react";
import Rating from "../rating/Rating";
import './DriverCard.css';

class DriverCard extends React.Component {
    render() {
        return(
            <div className ="containerDriveCard">
                <div>
                    <img 
                        className = 'imgDriver'
                        src="{this.props.img}"
                        alt="driverImg"
                    />
                </div>
                <div>
                    <h4>{this.props.name}</h4>
                    <Rating>{this.props.rating}</Rating>
                </div>
                <div>
                    {this.props.car.model} - {this.props.licensePlate}
                </div>
            </div>
        )
    }
}

export default DriverCard;