import masterCard from '../../assets/images/mastercard.png';
import visa from '../../assets/images/visa.png';
import './CreditCard.css';

const cardProviderImg = {
  Visa: visa,
  'Master Card': masterCard
}

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {
  const cardStyle = {
    backgroundColor: bgColor,
    color: color
  };

  return (
    <div className="CreditCard border-box" style={cardStyle}>
       <div className="CreditCard-type">
        <img src={cardProviderImg[type]} alt= ""/>
      </div>
      <div className="card-number">
        <p>•••• •••• •••• {number.slice(-4)}</p>
      </div>
      <div className="card-data">
        <p>Expires {expirationMonth.toString().slice(-2)}/{expirationYear.toString().slice(-2)}</p>
        <p>{bank}</p>
      </div>
      <p>{owner}</p>
    </div>
  );
};

export default CreditCard;
