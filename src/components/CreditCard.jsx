import React from 'react';

const CreditCard = ({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color})=>(
  <div className="uk-child-width-1-2@s uk-grid-match" uk-grid >
  <div>
      <div className="uk-card uk-card-default uk-card-hover uk-card-body" style={{backgroundColor: `${bgColor}`}} >
      
          <h3 className="uk-card-title">{number}</h3>
          <p>{expirationMonth}</p>
          <p>{type}</p>
          <p>{owner}</p>
          <style>{bgColor}</style>
          
          
      </div>
  </div>
  
  </div>
)

export default CreditCard;

