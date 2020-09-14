import React, { Component } from 'react'

/* export default */ class CreditCard extends Component {
    render() {
        return (
            <div className="CreditCard" style={{
                backgroundColor: this.props.bgColor,
                color: this.props.color,
              }}>

                <div className="type">
                {this.props.type === "Visa" && <img src="../img/visa.png" />}
                {this.props.type === "Master Card" && <img src="../img/master-card.svg" />}
                </div>

            <div className="number">•••• •••• •••• {this.props.number.substr(-4)}</div>
            <div className="expire-bank">
            <span>Expires {(this.props.expirationMonth)} / {this.props.expirationYear.toString().substr(2)} </span>
            <span className="bank">{this.props.bank}</span>
            </div>
            <div className="owner">{this.props.owner}</div>
            </div>

                
           
        );
    }
}


export default CreditCard;