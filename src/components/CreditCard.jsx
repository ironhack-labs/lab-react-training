import visa from '../assets/images/visa.png';
import masterCard from '../assets/images/master-card.svg';

export const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) => {
  const cardLogo = type === 'Visa' ? visa : masterCard;

  function lastDigits(number) {
    let toNumber = parseInt(number);
    let result = toNumber % 10000;
    return result;
  }

  const divStyle = {
    margin:20,
    backgroundColor: bgColor,
    color: color,
    width: 500,
    height: 300,
    display: 'flex',
    alignItems: 'center'

  };

  return (
    <div style={divStyle}>
      
      <div>**** **** {lastDigits(number)}</div>
      <div>
        Expires {expirationMonth} {expirationYear} {bank}
      </div>
      <div> {owner}</div>
      <img src={cardLogo} alt="cardLogo" width={50} />
    </div>
  );
};
