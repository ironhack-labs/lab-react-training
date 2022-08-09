import visaLogo from '../assets/images/visa.png';
import masterCardLogo from '../assets/images/master-card.svg';
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
    <div style={{ backgroundColor: bgColor, color: color }} className="card">
      <img
        style={{ height: '50px' }}
        src={type.toLowerCase() === 'visa' ? visaLogo : masterCardLogo}
        alt="credit-card"
      />
      <p>.... .... .... {number.slice(-4)}</p>
      <p>
        Expires: {expirationMonth}/{expirationYear}
      </p>
      <p>{bank}</p>
      <p>{owner}</p>
    </div>
  );
};
export default CreditCard;