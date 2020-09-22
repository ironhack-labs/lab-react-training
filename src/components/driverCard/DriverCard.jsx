import React from 'react';
import './DriverCard.css';

class DriverCard extends React.Component {


    rating () {
        let finalNumber = Math.round(this.props.rating) 
        for(let i = finalNumber; i<6; i++){
            return "★".repeat(i) + "☆".repeat(5-i)
        }

       
    }

  render() {
    return <div className="driver">

      <div className="container">
        <div className="image" style={{backgroundImage:  "url("+ this.props.img +")"}}>
       
      </div>
      <div className="info">
         <h2 className="name">{this.props.name}</h2>
         <span>{this.rating()}</span>
        <p>{this.props.car.model} - {this.props.car.licensePlate}</p>
      
      
      </div>
      </div>
      
     
      </div>;
  }
}
export default DriverCard;
