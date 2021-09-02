import React from "react";
import "./DriverCard.css";



export default class DriverCard extends React.Component {

    render() {

        const rating = Math.floor(this.props.rating)

        return (
        <div className="DriverCard">
            <div>
                <img src={this.props.img} className="driverImage" alt="img"/>
            </div>
            <div className="driverInfo">
                <h2>{this.props.name}</h2>
                <div className="driverRating">
                    {new Array(5).fill().map((_, index) => {                
                        if(index < rating){
                            return <span>&#9733;</span>
                        }
                        return <span>&#9734;</span>
                    })}
                </div>
                <p>{this.props.car.model} - {this.props.car.licensePlate}</p>
            </div>
        </div>
        );
    }
}