import React, { Component } from 'react';
import './CreditCard.css';

export default class CreditCard extends Component {
    render() {
        console.log(this.props);
        const cardStyle = {
            color: this.props.color,
            backgroundColor: this.props.bgColor,
          };
        return (
            <div className="creditCard" style={cardStyle}>
                <p>type: {this.props.type}</p>
                <p className="ccnumber">{this.props.number}</p>
                <p className="expires">Expires: {this.props.expirationMonth} / {this.props.expirationYear}{'  '}{this.props.bank}</p>
                <p>{this.props.owner}</p>
            </div>
        )
    }
}
