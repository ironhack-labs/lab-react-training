import React from 'react'

const CreditCard = props => {

    const expirationMonth = String(props.expirationMonth).padStart(2, '0')
    const expirationYear = props.expirationYear.toString().substr(-2)
    const cardNumber = props.number.substr(props.number.length - 4)

    const logo = type => {
        if(type === "Visa") {
            return "./img/visa.png"
        } else if(type === "Master Card") {
            return "./img/master-card.svg"
        }
    }

    const divStyle = {
        color: `${props.color}`,
        backgroundColor: `${props.bgColor}`,
      };

    return (
      <div className="credit-card ml-3" style={divStyle}>
        <div>
          <img alt="credit card logo" src={logo(props.type)}></img>
        </div>
        <div className="mt-2">
          <p className="card-number">**** **** **** {cardNumber}</p>
        </div>
        <div className="card-text ml-2">
          <p>Expires {expirationMonth}/{expirationYear} <span className="ml-3">{props.bank}</span></p>
          <p>{props.owner}</p>
        </div>
      </div>
    );
}

export default CreditCard;
