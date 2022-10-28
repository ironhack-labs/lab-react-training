import visa from '../assets/images/visa.png';
import masterCard from '../assets/images/master-card.png';

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
  const isVisa = (input) => {
    return input === 'Visa' ? visa : masterCard;
  };

  const expiredBlock = (a, b) => {
    return `Expires ${a.toString().padStart(2, '0')}/${b.toString().slice(-2)}`;
  };

  const anonymousNumber = (num) => {
    return `•••• •••• •••• ${num.slice(-4)}`;
  };

  const cardBg = {
    backgroundColor: bgColor,
    color: color,
  };

  return (
    <div style={cardBg} className="credit-card">
      <img className="logo" src={isVisa(type)} alt="visa" height="20px" />
      <p className="number">{anonymousNumber(number)}</p>
      <div className="expired-and-bank">
        <p className="expired">
          {expiredBlock(expirationMonth, expirationYear)}
        </p>
        <p className="bank">{bank}</p>
      </div>
      <p className="name">{owner}</p>
    </div>
  );
}
export default CreditCard;
