import masterCard from '../assets/images/master-card.png';
import Visa from '../assets/images/visa.png';

function CreditCard(props) {
  const style = {
    display: "inline-block",
    margin: "15px",
    padding: "20px",
    width: "300px",
    color: props.color,
    backgroundColor: props.bgColor,
    border: "0px solid white",
    borderRadius: "15px"
  };
  return (
    <div className="CreditCard" style={style}>
      <div className="type"><img alt="cardType" src={props.type === 'Visa' ? Visa : masterCard}/></div>
      <div className="number">•••• •••• •••• {props.number.slice(-4)}</div>
      <div className="card-info">
        <span>Expires {props.expirationMonth < 10 ? '0' + props.expirationMonth : props.expirationMonth}/{props.expirationYear - 2000}</span>
        <span>{props.bank}</span>
      </div>
      <div className="owner">{props.owner}</div>
    </div>
  );
}

export default CreditCard;
