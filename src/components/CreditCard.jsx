import React from 'react'

function CreditCard(props) {
    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props;

    const divStyle = {
        backgroundColor: bgColor,
        color: color,
    };

  return (
    <div class="containerCreditCard" style={divStyle}>
        <div class="creditCard">
        <section>
      <p>{type}</p>
      <p>{`•••• •••• •••• ${number.substring(number.length - 4)}`}</p>
      <p>Expires {expirationMonth} / {expirationYear} {bank}</p> 
      <p>{owner}</p>
      </section>
      </div>
    </div>
  )
}

export default CreditCard;