import React, { Component } from 'react'

export default class CreditCard extends Component {
    render() {
        return (
            <div id="greetings" style={{backgroundColor: this.props.bgColor, color: this.props.color}}> 
                <h1>{this.props.type}</h1>
                <h1>{".... .... .... " + this.props.number.substr(-4)}</h1>
                <h1>Expires {this.props.expirationMonth} / {this.props.expirationYear.toString().slice(-2)}</h1>
               
                <h1>{this.props.bank}</h1>
                <h1>{this.props.owner}</h1>
            </div>
        )
    }
}
