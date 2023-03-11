import { useEffect, useState } from 'react';
import visa from '../../assets/images/visa.png';
import masterCard from '../../assets/images/MasterCard_Logo.svg';
import './creditCard.css';

const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) => {
  const [creditCard, setCreditCard] = useState('');

  useEffect(() => {
    const hideNum = [];
    for (let i = 0; i < number.length; i++) {
      i < number.length - 4 ? hideNum.push('•') : hideNum.push(number[i]);
    }

    const spacedNumer = hideNum
      .join('')
      .match(/.{1,4}/g)
      .join(' ');

    setCreditCard(spacedNumer);
  }, [number]);

  const divStyles = {
    backgroundColor: bgColor,
    color: color,
  };
  return (
    <div style={divStyles} className="creditcard-container">
      <div className="type">
        {type === 'Visa' && <img src={visa} alt={type} />}
        {type === 'Master Card' && <img src={masterCard} alt={type} />}
      </div>
      <div className="number">
        <p>{creditCard}</p>
      </div>
      <div className="date">
        <p>
          Expires {expirationMonth.toString()}/
          {expirationYear.toString().slice(2, 4)} <span>{bank}</span>
        </p>
        <p>{owner}</p>
      </div>
    </div>
  );
};

export default CreditCard;
