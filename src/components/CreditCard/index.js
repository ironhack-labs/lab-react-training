import './CreditCardStyle.css'
import masterCard from '../../assets/images/master-card.svg';
import visaCard from '../../assets/images/visa.png';

function CreditCard({
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color
}) {
  const lastDigits = number.slice(-4);
  const cardColor = { backgroundColor: bgColor, color: color };
  const cardType = type === 'Visa' ? visaCard : masterCard;

  return (
    <div style={cardColor} className="CreditCard">
      <img src={cardType} alt="cardType" />
      <h2>
        <span>.... .... ....</span> {lastDigits}
        <p>
          Expires {expirationMonth}/{expirationYear}
          <span>{bank}</span>
        </p>
        <p>{owner}</p>
      </h2>
    </div>
  );
}

export default CreditCard;