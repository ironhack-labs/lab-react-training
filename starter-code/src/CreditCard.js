import React, { Component } from 'react';

class CreditCard extends Component {
    style = {
        color: this.props.color,
        backgroundColor: this.props.bgColor
    }
    

    render() {
        return (

            <div class="credit-card" style={this.style}>
                {this.props.type === "Master Card" && <div class="card-logo"><img alt="" src="./img/master-card.svg" /></div>}
                {this.props.type === "Visa" && <div class="card-logo"><img alt="" src="./img/visa.png" /></div>}
                
                <div class="middle-card">**** **** **** {this.props.number.slice(-4)}</div>
                <div class="lower-card">
                    <div class="card-line1">
                        <span>Expires {this.props.expirationMonth}/{this.props.expirationYear.toString().slice(-2)}         </span>
                        <span>{this.props.bank}</span>
                    </div>
                    <div class="card-line2">
                        <span>{this.props.owner}</span>
                    </div>
                </div>
            </div>
        )
    }
    
};

export default CreditCard;