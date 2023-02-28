import React from 'react';
/* import masterCard from '../assets/images/mastercard.svg'; */
import visa from '../assets/images/visa.png';

function CreditCard(props) {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;
  const divStyle = {
    backgroundColor: `${bgColor}`,
    color: `${color}`,
  };
  const num = number.split('');
  const newNum = num.splice(11, 4);
  const year = expirationYear.toString().split('');
  const newYear = year.splice(2, 2);

  if (type === 'Visa') {
    return (
      <div style={divStyle} className="creditCard">
        <div className="creditImage">
          <img src={visa} alt=""  />
        </div>
        <div className="creditNumber">•••• •••• •••• {newNum}</div>
        <div className="alignText">
          <span>
            Expires: {expirationMonth}/{newYear}
            </span>
            <span className="bankSpan">{bank}</span>
        </div>
        <div className="alignText">
          <p>{owner}</p>
        </div>
          
      </div>
    );
  } else if (type === 'Master Card') {
    return (
      <div style={divStyle} className="creditCard">
        <div>
          <img src alt="" />
        </div>
        <div>•••• •••• •••• {newNum}</div>
        <div>
          <p>
            Expires: {expirationMonth}/{newYear}
          </p>
          <p>{bank}</p>
          <p>{owner}</p>
        </div>
      </div>
    );
  }
}

export default CreditCard;
