import React from 'react';
import classes from './CreditCard.module.css';

const CreditCard = (props) => {
  const returnImgUrl = (type) => {
    switch (type) {
      case 'Master Card':
        return '/img/master-card.svg';
      case 'Visa':
        return '/img/visa.png';
      default:
        return '';
    }
  };

  const returnPropsNumber = (number) => {
    if (number.length < 16) {
      return 'Invalid Credit Card Number';
    }
    number = number.toString();
    let parsedNumber = '';
    for (let i = 0; i < number.length; i++) {
      if (i < 12) {
        parsedNumber += '•';
      } else {
        parsedNumber += number[i];
      }
      if ((i + 1) % 4 === 0) {
        parsedNumber += ' ';
      }
    }
    return parsedNumber;
  };

  const propsStyles = {
    backgroundColor: props.bgColor,
    color: props.color,
  };

  return (
    <div className={classes.container} style={propsStyles}>
      <div className={[classes.row, classes.imgContainer].join(' ')}>
        <img src={returnImgUrl(props.type)} alt="Card Type"></img>
      </div>
      <div className={[classes.row, classes.creditCardContainer].join(' ')}>
        <p className={classes.creditCardNumber}>{returnPropsNumber(props.number)}</p>
      </div>
      <div className={[classes.row, classes.infoContainer].join(' ')}>
        <p>
          Expires {props.expirationMonth}/{props.expirationYear}
        </p>
        <p>{props.bank}</p>
      </div>
      <div>{props.owner}</div>
    </div>
  );
};

export default CreditCard;
