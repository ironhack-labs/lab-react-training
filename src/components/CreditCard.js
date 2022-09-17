import MasterCardLogo from './MasterCardLogo';
import VisaLogo from '../assets/images/visa.png';

function CreditCard(props) {
  const divStyle = {
    backgroundColor: props.bgColor,
    color: props.color,
  };

  function formatNumber(number) {
    const str = number.toString();
    return str.slice(-4);
  }

  return (
    <div className="credit-card" style={divStyle}>
      {props.type === 'Visa' ? (
        <img src={VisaLogo} alt="visa" />
      ) : (
        <MasterCardLogo />
      )}
      <p>**** **** **** {formatNumber(props.number)}</p>
      <p>
        Expires {props.expirationMonth}/{props.expirationYear} {props.bank}
      </p>
      <p>{props.owner}</p>
    </div>
  );
}

export default CreditCard;
