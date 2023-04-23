import React from 'react';

const CreditCard = (props) => {
  const ccCompany =
    props.type === 'Visa'
      ? './../assets/images/visa.png'
      : './../assets/images/master-card.svg';

  return (
    <div className="align-items-center justify-content-center">
      <div
        className="col m-4 border border-dark rounded d-flex flex-column"
        style={{
          width: '350px',
          height: '175px',
          backgroundColor: `${props.bgColor}`,
          color: `${props.color}`,
        }}
      >
        <div className="row my-2 justify-content-end mx-2">
          <img style={{ width: '80px' }} src={ccCompany} alt={props.type} />
        </div>
        <div className="row justify-content-center mt-4">
          <h2>•••• •••• •••• {props.number.slice(12)}</h2>
        </div>
        <div className="row">
          <p>
            Expires: {`${props.expirationMonth}`.padStart(2, '0')}/
            {`${props.expirationYear}`.slice(2)} {props.bank}
            <br />
            {props.owner}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
