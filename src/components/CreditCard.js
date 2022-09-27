import visaImg from '../assets/images/visa.png';
import mcImage from '../assets/images/mastercard.png';

const CreditCard = (props) => {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;

  return (
    <div className="credit-card" style={{ backgroundColor: bgColor }}>
      <img alt="#" src={type === 'Visa' ? visaImg : mcImage}></img>
      <h1>{number}</h1>
      <p>
        Expires {expirationMonth}/{expirationYear} {bank}
      </p>
      <p>{owner}</p>
    </div>
  );
};

export default CreditCard;
