import React from 'react';
import BoxColor from './BoxColor';
import mastercard from '../imgs/master-card.svg';
import visa from '../imgs/visa.png';
import './CreditCard.css';

function CreditCard(props) {
  return (
    <div className="card-size m-2">
      <BoxColor hex={props.bgColor} class="rounded-3">
        <div className="card-body" style={{ color: props.color }}>
          <header className="d-flex flex-row-reverse">
            <img
              className="img-size mb-1"
              src={props.type === 'Visa' ? visa : mastercard}
              alt="Credit-card logo"
            />
          </header>
          <h2>•••• •••• •••• {props.number.substr(-4)}</h2>
          <div className="row">
            <div className="text-truncate">
              <small>
                Expires: {props.expirationMonth}/{props.expirationYear}
              </small>
              <span className="ms-5">
                <small>{props.bank}</small>
              </span>
            </div>
            <div>
              <small>{props.owner}</small>
            </div>
          </div>
        </div>
      </BoxColor>
    </div>
  );
}

export default CreditCard;
