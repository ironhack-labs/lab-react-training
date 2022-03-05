import visa from './assets/images/visa.png';
import mastercard from './assets/images/master-card.svg';

const types = { Visa: visa, 'Master Card': mastercard };

function CreditCard(props) {
  const type = types[props.type];

  return (
    <div
      className="credit-card"
      style={{ backgroundColor: props.bgColor, color: props.color }}
    >
      <div className="type">
        <img src={type}></img>
      </div>
      <div className="number">
        •••• •••• •••• {props.number.substring(12, props.number)}
      </div>
      <div>
        <span>
          Expires {props.expirationMonth.toString().padStart(2, '0')}/
          {props.expirationYear.toString().slice(-2)}
        </span>
        <span style={{ marginLeft: '20px' }}>{props.bank}</span>
      </div>
      <div>{props.owner}</div>
    </div>
  );
}

export default CreditCard;
