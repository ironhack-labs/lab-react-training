import React from 'react'
import '../components/DriverCard.css'
import Rating from './Rating'

class DriverCard extends React.Component {
    render() {

        
        return (
            <div className="DriverCard">
                <div>
                    <img class="DriverImg" src={this.props.img} alt={`${this.props.name}`}/>
                </div>
                <div className ="DriverInfo">
                    <h1><b>{this.props.name}</b></h1>
                    <h2><Rating >{this.props.rating}</Rating></h2>
                    <h4>{this.props.car.model} - {this.props.car.licensePlate}</h4>
                </div>
            </div>
        )
    
    }
}

export default DriverCard