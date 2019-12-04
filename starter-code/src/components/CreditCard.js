import React, { Component } from 'react'
import {CreditCardStyle} from "../styles/CreditCard.js"

export default class CreditCard extends Component {
    state = {
        cardImg: "/img/master-card.svg",
        number: this.props.number.slice(12, 20)
    }
    render() {
        return (
            <CreditCardStyle>
                <img src={this.state.cardImg} alt="credit card"/>
                <p>···· ···· ···· {this.state.number}</p>
                <p>Expires</p><span>{this.props.expirationMonth}</span>
            </CreditCardStyle>
        )
    }
}
