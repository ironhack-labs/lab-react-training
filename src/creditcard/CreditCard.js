import './CreditCard.css';
import masterCard from '../assets/images/master-card.svg';
import visa from '../assets/images/visa.png';
const CreditCard = (props) => {
  const card = {
    type: props.type,
    number: props.number.slice(-4),
    expirationMonth: props.expirationMonth,
    expirationYear: props.expirationYear,
    bank: props.bank,
    owner: props.owner,
  };

 

  const style = {
    backgroundColor: props.bgColor,
    color: props.color,
  };

  let logo;
  if (card.type === 'Master Card') logo = masterCard;
  if (card.type === 'Visa') logo = visa;
  return (
    <div className="CreditCard" style={style}>
      <div className="CreditCard-logo card">
        <img src={logo} alt={props.type} />
      </div>
      <div className="CreditCard-number card">•••• •••• •••• {card.number}</div>
      <div className="CreditCard-details card">
        <p>Expires {card.expirationMonth}/{card.expirationYear}&emsp;&emsp;{card.bank}</p>
        <p>{card.owner}</p>
      </div>
    </div>
  );
};

export default CreditCard
