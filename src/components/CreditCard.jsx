import React from 'react';
import VisaLogo from '../assets/images/visa.png';
import MasterCardLogo from '../assets/images/master-card.svg';

const creditCardLogo = {
  Visa: VisaLogo,
  MasterCard: MasterCardLogo,
};

function CreditCard(props) {
  const imgUrl = creditCardLogo[props.type];
  const showNum = props.number.slice(-4);

  return (
    <div
      className="creditCard"
      style={{ background: `${props.bgColor}`, color: `${props.color}` }}
    >
      <img className="creditCardLogo" src={imgUrl} alt="" />
      <div className="creditCardNum">**** **** **** {showNum}</div>
      <div>
        <span className="creditCardInfo">
          Expires {props.expirationMonth} {props.expirationYear}
        </span>
        <span className="bank">{props.bank}</span>
      </div>

      <div className="creditCardOwner">{props.owner}</div>
    </div>
  );
}

export default CreditCard;
