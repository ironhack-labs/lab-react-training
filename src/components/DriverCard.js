import React, {Component} from 'react'

class DriverCard extends Component {
    render() {
        const {
            name,
            rate,
            img,
            car
        } = this.props;

        const number = Math.round(rate);
        const level = [];

        for (let i=0; i<=5; i++){
            if (i <= number) {
                level.push("★")
            } else {
                 level.push("☆")
            }
        }

        return(
            <div className="driver-card">
                <img src={img} alt={name}></img>
                <div className="driver-info">
                    <p>{name}</p>
                    <p>{level}</p>
                    <p>{car.model}</p>
                    <p>{car.licensePlate}</p>
                </div>
            </div>
        );


    
    
    }
}


export default DriverCard;
