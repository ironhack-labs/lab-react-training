import React, { Component } from 'react'

export default class CreditCard extends Component {
    render() {
        const card = {
            color: this.props.color,
            backgroundColor: this.props.bgColor,
            height: "150px"
        }
        return (
            <div className="cards" style={card}>
                <div>
                <h4>type: {this.props.type}</h4>
                <h4>number: **** **** **** {this.props.number.slice(-4)}</h4>
        <p>Expires {this.props.expirationMonth}/{this.props.expirationYear} {this.props.bank}</p> 
        <p>{this.props.owner}</p>
                </div>
            </div>
        )
    }
}
