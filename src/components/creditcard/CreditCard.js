import './CreditCard.css';
import visa from '../../assets/images/visa.png';
import masterCard from '../../assets/images/master-card.svg';

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
  if (type === 'Visa') {
    type = visa;
  } else {
    type = masterCard;
  }

  const formatedCardNumber = '●●●● ●●●● ●●●●' + number.slice(12, 16);

  return (
    <div className="CardContainer" style={{ backgroundColor: `${bgColor}` }}>
      <div className="LogoImg">
        <img src={type} alt="..." />
      </div>
      <div className="CardText" style={{ color: `${color}` }}>
        <p className="CreditCardNumber" style={{ color: `${color}` }}>
          {formatedCardNumber}
        </p>
        <div className="cardData">
          <p className="Expiration">
            Expires {expirationMonth}/{expirationYear}
          </p>
          <p className="Bank">{bank}</p>
          <p className="Owner">{owner}</p>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
