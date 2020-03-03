import React from 'react';

// import Mastercard from 'process.envPUBLIC_URL/img/master-card.svg';
// import Visa from 'PUBLIC_URL/img/visa.png';

const CreditCard = props => {
  return (
    <div className="greetings" style={({ color: props.color }, { backgroundColor: props.bgColor })}>
      {/* <img src={Mastercard} alt="mastercard" /> */}
      <p>{props.number}</p>
      <p>{props.owner}</p>
      <p>
        Expires {props.expirationMonth}/{props.expirationYear} {props.bank}
      </p>
    </div>
  );
};

export default CreditCard;
