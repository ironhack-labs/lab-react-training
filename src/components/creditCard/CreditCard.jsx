import React from 'react';
import './CreditCard.css';

export default class CreditCard extends React.Component {
  render() {
    const {
      type,
      number,
      expirationMonth,
      expirationYear,
      bank,
      owner,
      bgColor,
      color,
    } = this.props;

    function getLogo(type) {
      if (type === 'Visa') return './img/visa.png';
      else if (type === 'Master Card') return 'img/master-card.svg';
    }

    function getNumber(number) {
      let long = number.length;
      return (
        number[long - 4] +
        number[long - 3] +
        number[long - 2] +
        number[long - 1]
      );
    }

    return (
      <div
        className="CreditCard"
        style={{ backgroundColor: bgColor, color: color }}
      >
        <div className="CreditCard-img">
          <img src={getLogo(type)} alt={type} />
        </div>
        <div className="CreditCard-number">
          <div
            className="circle circleFirst"
            style={{ backgroundColor: color }}
          ></div>
          <div className="circle" style={{ backgroundColor: color }}></div>
          <div className="circle" style={{ backgroundColor: color }}></div>
          <div className="circle" style={{ backgroundColor: color }}></div>
          <div
            className="circle circleFirst"
            style={{ backgroundColor: color }}
          ></div>
          <div className="circle" style={{ backgroundColor: color }}></div>
          <div className="circle" style={{ backgroundColor: color }}></div>
          <div className="circle" style={{ backgroundColor: color }}></div>
          <div
            className="circle circleFirst"
            style={{ backgroundColor: color }}
          ></div>
          <div className="circle" style={{ backgroundColor: color }}></div>
          <div className="circle" style={{ backgroundColor: color }}></div>
          <div className="circle" style={{ backgroundColor: color }}></div>
          <h1 className="circleFirst">{getNumber(number)}</h1>
        </div>

        <h5 className="CreditCrad-expires">
          Expires {expirationMonth}/{expirationYear}
          <span>{bank}</span>
        </h5>
        <h3  className="CreditCrad-owner">{owner}</h3>
      </div>
    );
  }
}
