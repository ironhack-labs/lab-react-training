import React, { Component } from 'react';
import Rating from './Rating';


class DriverCard extends Component {

    render(){
        const {name, rating, img, car} = this.props;

        return (
            <div className="container-drivercard">
                <div className="driverCard-img">
                    {/* <img src={img}></img>  */}
                </div>
                <div className>
                    <h1>{name}</h1>
                    <Rating className="drivercard-rating">{rating}</Rating>
                    <span>{car.model} {car.licensePlate}</span>
                    
                </div>
            </div>

        )
    }
}

export default DriverCard;