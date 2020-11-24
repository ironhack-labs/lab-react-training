import React, { Component } from 'react';
import './CreditCard.css'

class CreditCard extends Component {
    render(){
        return (
            <div /*style={{backgroundColor: {this.prop.bgColor},color: {this.props.color}}}> */className="credit-card-div">
            <img src={this.props.type} alt=""/>
            <p className="card-el-1">{this.props.number}</p>
            <p className="card-el">Expires : <span>{this.props.expirationMonth}</span>/<span>{this.props.expirationYear}</span> <span>{this.props.bank}</span></p>
            <p className="card-el">{this.props.owner}</p>
            </div>
        );
    }
}

export default CreditCard