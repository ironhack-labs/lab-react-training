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
  const cardNumberSubString = number.substring(
    number.length - 5,
    number.length - 1
  );
  const styles = { backgroundColor: `${bgColor}`, color: `${color}` };
  return (
    <div className="cardContainer" style={styles}>
      <div className="typeLogoContainer">
        <img
          src={`${type === 'Visa' ? '../img/visa.png' : ''} ${
            type === 'Master Card' ? '../img/master-card.svg' : ''
          }`}
          alt=""
        />
      </div>
      <div className="cardNumberContainer">
        <h4>• • • • • • • • • • • {cardNumberSubString}</h4>
      </div>
      <div className="expirationDateContiner">
        <h4>
          Expires {expirationMonth} {expirationYear}
        </h4>
        <h4>{bank}</h4>
      </div>
      <div className="ownerContainer">
        <h4>{owner}</h4>
      </div>
    </div>
  );
};

export default CreditCard;
