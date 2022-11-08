import React from 'react';

export const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) => {
  const card = {
    backgroundColor: bgColor,
    color: color,
    height: 200,
    width: 350,
    borderRadius: 10,
  };
  const cardNumber = {
    fontSize: 30,
  };

  const ownername = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
    padding: '0px 20px',
  };
  const dateStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
    padding: '0px 20px',
    fontSize: 13,
  };
  const topDiv = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
  };
  
  const chipImage = {
    padding: 10,
  };
  const cardDetails = {
    padding: '0px 0px 10px 0px',
    marginTop: 10,
  };
  return (
    <div style={card}>
      <div style={topDiv}>
        <div style={chipImage}>
          <img src="https://i.imgur.com/lRG4VIS.png" width={50} alt="" />
        </div>

        {type === 'Visa' ? (
          <img
            style={{ width: '60px', alignSelf: 'flex-end' }}
            src="../../assets/images/visa.png"
            alt=""
          />
        ) : (
          <img
            style={{ width: '60px', alignSelf: 'flex-end' }}
            src="../../assets/images/master-card.svg"
            alt=""
          />
        )}
      </div>

      <div style={cardDetails}>
        <div style={cardNumber}>
          <span style={{ padding: '0px 4px' }}>****</span>
          <span style={{ padding: '0px 4px' }}>****</span>
          <span style={{ padding: '0px 4px' }}>****</span>
          <span style={{ padding: '0px 4px' }}>
            {number.slice(number.length - 4)}
          </span>
        </div>
      </div>
      <div style={dateStyle}>
        <span>
          Expires {expirationMonth}/{expirationYear}
        </span>
        <span>{bank}</span>
      </div>
      <div style={ownername}>
        <span>{owner}</span>
        {/* <img src="https://imgur.com/KpIC2Cs.png" alt="" /> */}
      </div>
    </div>
  );
};
