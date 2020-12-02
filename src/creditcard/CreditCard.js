import React from 'react';

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
  if (type === 'Visa') {
    color = 'white';
    bgColor = '#11aa99';
  } else {
    color = 'black';
    bgColor = '#eeeeee';
  }

  const divStyle = {
    backgroundColor: bgColor,
    color: color,
    borderRadius: '20px',
    width: '230px',
  };
  return (
    <div className="creditcard" style={divStyle}>
      <p>{type}</p>
      <p>**** **** **** {number.slice(12)}</p>
      <div>
        <p>
          Expires {expirationMonth}/{expirationYear}
        </p>
        <p>{bank}</p>
      </div>

      <p>{owner}</p>
    </div>
  );
};
export default CreditCard;
