import React from 'react';
import "./CreditCard.css";
import "../../App.css";

class CreditCard extends React.Component {
    render(){
        return(
            
        <div className = {this.props.color} style = {{backgroundColor: this.props.bgColor}} >
            <div className = {this.props.type}></div>
            <div >{this.props.number}</div>
            <div>
                <p>Expires {this.props.expirationMonth}/{this.props.expirationYear}</p> <span>{this.props.bank}</span> <br></br>
                <p>{this.props.owner} </p>
            </div>
        </div>
    )}
}
export default CreditCard
