import visa from '../assets/images/visa.png';
import masterCard from '../assets/images/master-card.png';

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
  return (
    <div style={{ backgroundColor: bgColor, color: color }}>
      <img
        style={{ height: '50px' }}
        src={type.toLowerCase() === 'visa' ? visa : masterCard}
        alt="credit-card"
      />
      <p> .... .... ....{number.slice(-4)} </p>
      <p>
        Expires: {expirationMonth}/{expirationYear}
      </p>
      <p>{bank}</p>
      <p>{owner}</p>
    </div>
  );
};
export default CreditCard;
