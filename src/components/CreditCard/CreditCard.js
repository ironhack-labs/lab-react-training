import React, { Component } from 'react'
import './CreditCard.css';

export default class CreditCard extends Component {
    
    state = {
        styles : {
            backgroundColor: `${this.props.bgColor}`,
            color: `${this.props.color}`
        },
        type: {
            Visa: './img/visa.png',
            "Master Card": './img/master-card.svg'
        }

    }

    render() {
        // console.log(this.props)
        return (
                <div className="card" style={this.state.styles}>
                    <img src={this.state.type[this.props.type]} style={{width: '25px'}}/>
                    <span className="number">**** **** **** {this.props.number.slice(12)}</span><br/>
                    <span>Expires {this.props.expirationMonth}/{this.props.expirationYear.toString().slice(2)}</span> {this.props.bank}<br/>
                    <span>{this.props.owner}</span>
                </div>
        )
    }
}
