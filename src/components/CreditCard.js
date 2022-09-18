import visa from '../assets/images/visa.png';
import mastercard from '../assets/images/master-card.png';

function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  return (
    <div
      className="creditCard"
      style={{
        height: 100,
        width: 150,
        border: 1,
        backgroundColor: bgColor,
        color: color,
      }}
    >
      <img style={{ height: 10 }} src={type === 'Visa' ? visa : mastercard} />

      <span className="number">{number}</span>
      <span className="expirationMonth">{expirationMonth}</span>
      <span className="expirationYear">{expirationYear}</span>
      <span className="bank">{bank}</span>
      <span className="owner">{owner}</span>
    </div>
  );
}

export default CreditCard;
