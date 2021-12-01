import React from 'react';

const CreditCard = (props) => {
  let cardImage = '';

  switch (props.type) {
    case 'Visa':
      cardImage = '/img/visa.png';
      break;
    case 'Master Card':
      cardImage = '/img/master-card.svg';
      break;
    default:
      break;
  }
  const divStyle = { backgroundColor: props.bgColor, color: props.color };

  return (
    <div className="marginTar">
      <div className="tarjeta" style={divStyle}>
        <p>XXXX XXXX XXXX {props.number.slice(-4)}</p>
        <img className="tarImg" src={cardImage} alt="" />
        <p>
          Expires{' '}
          <b>
            {props.expirationMonth}/{props.expirationYear.toString().slice(-2)}
          </b>
        </p>
        <p>
          <b>{props.bank}</b>
        </p>
        <p>
          <b>{props.owner}</b>
        </p>
      </div>
    </div>
  );
};

export default CreditCard;
