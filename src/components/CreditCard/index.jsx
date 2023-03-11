import React from 'react';
import './index.css'

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {
  const getCensoredNum = (num) => {
    return ` •••• •••• •••• ${num[num.length - 4]}${num[num.length - 3]}${num[num.length - 2]}${num[num.length - 1]}`
  }
  const getPrettyDate = (month, year) => {
    month - 9 <= 0 ? month = `0${month}` : month = `${month}`
    year = `${year - 2000}`
    return `${month}/${year}`
  }
  const getImage = (type) => {
    switch (type) {
      case "Visa":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Visa_2021.svg/1200px-Visa_2021.svg.png"
        break;
      case "Master Card":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/1200px-Mastercard_2019_logo.svg.png"
        break;
      default:
        break;
    }
  }
  return (
    <div className='CreditCard' style={{backgroundColor: bgColor, color: color}}>
      <img src={getImage(type)} />
      <h3>{getCensoredNum(number)}</h3>
      <div>
        <span>Expires {getPrettyDate(expirationMonth, expirationYear)}</span>
        <span>{bank}</span>
        <p>{owner}</p>
      </div>
    </div>
  );
};

export default CreditCard;