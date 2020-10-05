import React from 'react';

const CreditCard = (props) => {
  //Function pour hide les nums

  //function pour choisir le type de card
  const typeCreditCard = (type) => {
    if (type === 'Visa') {
      return '/img/visa.png';
    } else if (type === 'Master Card') {
      return '/img/master-card.svg';
    } else {
      return;
    }
  };

  const test = (crediCardNum) => {
    return "•••• •••• •••• " + crediCardNum.substr(-4);
};

  return (
    <div
      className="credit-card"
      style={{ backgroundColor: props.bgColor, color: props.color }}
    >
      <div className="cc-logo">
        <img src={typeCreditCard(props.type)} alt="Bank brand" />
      </div>
      <div className="cc-number">{test(props.number)} </div>
      <span>
        Expires {props.expirationMonth}/
        {props.expirationYear.toString().substr(2)}&nbsp; &nbsp;{props.bank}
      </span>
      <p className="credit-card-owner">{props.owner}</p>
    </div>
  );
};

export default CreditCard;
