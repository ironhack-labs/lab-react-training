import React, { Component } from 'react'

class DriverCard extends Component {
    render () {
        return(
            <div className="DriverCard-box">
                <div className="DriverCard-img">
                <img src={this.props.img} alt="driver"/>
                </div>
                <div className="DriverCard-name">
                    <h1>{this.props.name}</h1>
                </div>
                <div className="DriverCard-rating">
                    <h1>{this.props.rating}</h1>
                </div>
                <div className="DriverCard-car">
                    <h3>{this.props.car.model}</h3>
                    <span>{this.props.car.licensePlate}</span>
                </div>    
            </div>
        )
    }
}
export default DriverCard