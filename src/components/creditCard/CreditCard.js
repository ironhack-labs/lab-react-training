import './CreditCard.css';
import React from 'react';
import masterCardImg from '../../assets/images/master-card.svg';
import visaIMG from '../../assets/images/visa.png';

function CreditCard(props) {
  //logo decision
  let logoToUse;
  if (props.type === 'Visa') logoToUse = visaIMG;
  else logoToUse = masterCardImg;
  // creditCard Number slicing off all but last 4
  const number = '' + props.number.slice(-4);
  // expirationDate conjunction
  let expirationDate = '' + props.expirationMonth;
  if (expirationDate.length === 1) expirationDate = '0' + expirationDate;
  expirationDate += '/';
  expirationDate += ('' + props.expirationYear).slice(-2);
  // styling
  const styling = {
    backgroundColor: props.bgColor,
    color: props.color,
  };
  return (
    <div className="card" style={styling}>
      <img src={logoToUse} alt="logo"></img>
      <p className='number'>•••• •••• •••• {number}</p>
      <div className='expireAndBank'>
        <p>Expires {expirationDate}</p>
        <p>{props.bank}</p>
      </div>
      <p className='name'>{props.owner}</p>
    </div>
  );
}

export default CreditCard;

{
  /* <CreditCard
  type="Visa"
  number="0123456789018845"
  expirationMonth={3}
  expirationYear={2021}
  bank="BNP"
  owner="Maxence Bouret"
  bgColor="#11aa99"
  color="white" 
/> */
}
