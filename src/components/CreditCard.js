import React from 'react';
// import masterCardLogo from '';

function CreditCard(props) {
  function hideCardNumber(cardNumber) {
    const securityArray = [...Array(4)].map((el) => String.fromCharCode(9899));
    console.log(securityArray);
    return (
      <p>
        <small>
          {/* espacement entre les chiffres secrets */}
          {[...Array(3)].map((el) => securityArray.join('')).join(' ')}
        </small>
        {/* pour avoir les 4 denriers chiffres */}
        {cardNumber.substr(-4)}
      </p>
    );
  }

  return (
    <div
      className="credit-card"
      style={{ backgroundColor: props.bgColor, color: props.color }}
    >
      <div className="credit-card-flag">
        <img
          src={props.type === 'Visa' ? 'img/visa.png' : 'masterCardLogo'}
          alt="Credit Card Flag"
        />
      </div>

      <div className="credit-card-number">{hideCardNumber(props.number)}</div>

      <span>
        {' '}
        {`Expires ${props.expirationMonth}/${String(
          props.expirationYear
        ).substr(2)}`}
      </span>

      {props.bank}
      <p className="credit-card-owner"> {props.owner}</p>
    </div>
  );
}

export default CreditCard;
