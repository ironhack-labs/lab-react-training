import React, { Component } from "react";

class CreditCard extends Component {
  render() {
    const props = this.props;
    const cardStyle = {
      backgroundColor: `${props.bgColor}`,
      borderRadius: "10px",
      color: `${props.color}`
    };
    const cardFlag = {
      Visa: "./img/visa.png",
      "Master Card": "./img/master-card.svg"
    };
    return (
        <div style={cardStyle} className="card">
          <div className="cardFlag">
            <img src={cardFlag[props.type.toString()]} alt="flag" />
          </div>
          <h3>•••• •••• •••• {props.number.slice(12)}</h3>
          <div>
            <p>
              Expires {props.expirationMonth}/
              {props.expirationYear.toString().slice(2)} {props.bank}
            </p>
            <p>{props.owner}</p>
          </div>
        </div>
    );
  }
}

export default CreditCard;
