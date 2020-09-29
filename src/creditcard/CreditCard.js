import React from 'react';
import './CreditCard.css';

const CreditCard = (props) => {
  //credit card number
  let number = props.number;
  number = number.replace(/\d(?=\d{4})/g, '•');

  let year = props.year;
  year = year.replace(/\d(?=\d{2})/g, '');

  //exp month
  let expMonth =
    props.expirationMonth < 10
      ? '0' + props.expirationMonth
      : props.expirationMonth;

  //image -> visa or master card
  let text = '';
  let type = props.type;
  const visaOrMaster = (type) => {
    switch (type) {
      case 'visa':
        text = '../img/visa.png';
        break;
      case 'master-card':
        text = '../img/master-card.svg';
        break;
      default:
        return 'Enter a correct language';
    }
  };
  visaOrMaster(type);

  //background color
  const divStyle = {
    background: `${props.backColor}`,
    color: `${props.color}`,
  };

  return (
    <div className="credit-card">
      <div className="each-card" style={divStyle}>
        <section1>
          <img className="visaMaster" src={text} />
        </section1>
        <section2>
          <h2>
            <b> {number}</b>
          </h2>
        </section2>
        <section3>
          <p>
            Expires {expMonth}/{year} {props.bank}
          </p>
          <p>{props.owner}</p>
        </section3>
      </div>
    </div>
  );
};
export default CreditCard;
