import VisaLogo from './../../assets/images/visa.png';
import Mastercard from './../../assets/images/master-card.svg';
import './CreditCard.css';

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
  const divStyle = {
    backgroundColor: bgColor,
    color: color,
  };

  return (
    <div style={divStyle} className="credit-card">
      <div className="card-logo">
        {type === 'Visa' ? (
          <img src={VisaLogo} alt="Visa" />
        ) : (
          <img src={Mastercard} alt="Mastercard" className="mastercard" />
        )}
      </div>
      <div className="card-number">
        <p>•••• •••• •••• {number.slice(12)}</p>
      </div>
      <div className="card-info">
        <p>
          Expires {expirationMonth}/{expirationYear.toString().substring(2)}{' '}
          <span>{bank}</span>
        </p>
        <p>{owner}</p>
      </div>
    </div>
  );
};

export default CreditCard;
