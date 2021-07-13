import React from 'react';
import PropTypes from 'prop-types';


function CreditCard({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}){
    
    let lastFour = number.substring(11, 15);
    let dots = '*'.repeat(4);

    return (
      <>
        <div className="bcards" style={{ backgroundColor: bgColor, color: color }}>
          <p id="type">{type}</p>
          <p id="number">
            {dots} {dots} {dots} {lastFour}
          </p>
            <div>
                <span>Expires {`${expirationMonth}/${expirationYear}`}</span>      <span>{bank}</span>         
            </div>
          <p id="owner">{owner}</p>
        </div>
      </>
    );

};

CreditCard.propTypes = {
  type: PropTypes.string,
  number: PropTypes.string,
  expirationMonth: PropTypes.number,
  expirationYear: PropTypes.number,
  bank: PropTypes.string,
  owner: PropTypes.string,
  bgcolor: PropTypes.string,
  color: PropTypes.string
};
export default CreditCard;