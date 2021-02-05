import React from 'react';
import './CreditCard.css';
import BoxColor from '../boxcolor/BoxColor';
import visa from '../imgs/visa.png';
import mastercard from '../imgs/master-card.svg';

const CreditCard = (props) => {
  const cardImg = props.type === 'Visa' ? visa : mastercard;
  return (
    <div className="col-md-4 " style={{ color: props.color }}>
      <BoxColor class="rounded-3 card-width m-1 p-2" hex={props.bgColor}>
        <div>
          <header className="p-2 d-flex flex-row-reverse img-size">
            <img className="img-size" src={cardImg} alt="Credit-card logo" />
          </header>
          <h2 className="p-2"> •••• •••• •••• {props.number.substr(-4)}</h2>
          <div>
            <div>
              <span>
                <small>
                  Expires: {props.expirationMonth}/{props.expirationYear}
                </small>
              </span>
              <span className="ms-5">
                <small>{props.bank}</small>
              </span>
            </div>
            <div>
              <span>
                <small>{props.owner}</small>
              </span>
            </div>
          </div>
        </div>
      </BoxColor>
    </div>
  );
};

export default CreditCard;