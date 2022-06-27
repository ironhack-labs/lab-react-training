import React from 'react';
import visaPic from '../assets/images/visa.png';
import masterPic from '../assets/images/master-card.png';

const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) => {
  let picUrl = '';

  switch (type) {
    case 'Visa':
      picUrl = visaPic;
      break;
    case 'Master Card':
      picUrl = masterPic;
      break;
  }

  const censoredNumber = number
    .split('')
    .map((e, i) => {
      if (i < 12) {
        return '•';
      }
      return e;
    })
    .join('');

  const expirationDate = `${expirationMonth}/${expirationYear}`;

  return (
    <div
      style={{
        backgroundColor: bgColor,
        color: color,
        width: '475px',
        height: '275px',
        borderRadius: '10px',
        marginLeft: '15rem',
      }}
    >
      <div className="creditCard">
        <img src={picUrl} className="cardPic" alt="Bank logo" />
        <p className="cardNumber">{`${censoredNumber.slice(
          0,
          4
        )} ${censoredNumber.slice(4, 8)} ${censoredNumber.slice(
          8,
          12
        )} ${censoredNumber.slice(12, 16)}`}</p>
        <div className="cardInfo">
          <div className="expire">
            <p>{`Expires ${expirationDate}`}</p>
            <p>{bank}</p>
          </div>
          <p>{owner}</p>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
