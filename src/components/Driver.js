import React, { Component } from 'react';
import Start from './Ratings'
class Driver extends Component {

    render() {

        return (
            <div className="drivercard">
                <img alt="photo man" src={this.props.img} />
                <h2>{this.props.name}</h2>
                <Start children={this.props.rating} />
                <p>{this.props.car.model}- {this.props.car.licensePlate}</p>
            </div>
        )
    }


}

export default Driver