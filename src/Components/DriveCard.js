import React, { Component } from 'react'
import Rating from './Rating'
import Driver from './Driver.css'

class DriveCard extends Component{
    render(){

        
        return(
            <div>
                <img className = 'driver' src = {this.props.img} alt =""/>
                <h4>{this.props.name}</h4>
                <Rating>{this.props.rating}</Rating>
                <p>{this.props.car.model} {this.props.car.licensePlate}</p>
            </div>       
        )
    }
}

export default DriveCard