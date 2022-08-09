import visaFlag from '../assets/images/visa.png';
import masterFlag from '../assets/images/master-card.svg';

function CreditCard(props) {
  let flag = '';

  if (props.type === 'Visa') flag = visaFlag;
  if (props.type === 'Master Card') flag = masterFlag;

  let divStyle = {
    backgroundColor: props.bgColor,
    color: props.color,
  };

  return (
    <div style={divStyle} className="credit-card">
      <img src={flag} alt="card flag"></img>

      <p className="numbers">•••• •••• •••• {props.number.substr(12)}</p>
      <p className="info">
        Expires {props.expirationMonth}/{props.expirationYear} {props.bank}
      </p>
      <p className="info">{props.owner}</p>
    </div>
  );
}

export default CreditCard;
