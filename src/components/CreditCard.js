import React, { Component } from 'react';

export default class CreditCard extends Component {
    render() {
        const cardColor = {
            "background-color": this.props.bgColor,
            "color": this.props.color
        }
        function num(number) {
            return "**** ".repeat(3) + number.slice(-4)
        }
        return (
            <div style={cardColor}>
                <div>
                    <p>{this.props.type}</p>
                    <h3>{num(this.props.number)}</h3>
                </div>
                <div>
                    <p>Expires {this.props.expirationMonth}/{this.props.expirationMonth}   {this.props.bank}</p>
                    <p>{this.props.owner}</p>
                </div>
            </div>
        )
    }
} 