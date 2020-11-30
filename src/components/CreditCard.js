//1. Import
import React, { Component } from 'react';
import "../App.css";

// 2. Function || Class & Export

export default class CreditCard extends Component {
    render(){
        return (
            <div className="credit-card-div">
            <img src={this.props.type} alt="" width = '10%' height = '10%' />
            <p className="card-el-1">{this.props.number}</p>
            <p className="card-el">Expires : <span>{this.props.expirationMonth}</span>/<span>{this.props.expirationYear}</span> <span>{this.props.bank}</span></p>
            <p className="card-el">{this.props.owner}</p>
            </div>
        );
    }
}