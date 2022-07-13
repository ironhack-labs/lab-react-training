import './CreditCard.css';
import Visa from './../assets/images/visa.png';
import Mastercard from './../assets/images/master-card.svg';

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
  let imageType;
  let cardNumber = number.slice(-4);
  let backgroundColor = `${bgColor}`;
  imageType = type === Visa ? Visa : Mastercard;
  return (
    <div className="creditCard" style={{ backgroundColor, color }}>
      <div className="cardHead">
        <img src={imageType} alt="credit card" />
      </div>
      <div className="cardBody">
        <div>.... .... .... {cardNumber}</div>

        <p>
          Expires {expirationMonth}/{expirationYear} {bank}
        </p>
        <p>{owner}</p>
      </div>
    </div>
  );
};

export default CreditCard;
