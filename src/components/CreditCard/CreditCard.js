import styles from './CreditCard.css';
import logoMasterCard from '../../assets/images/master-card.svg';
import logoVisa from '../../assets/images/visa.png';

function CreditCard(props) {
  const visibleNumber = props.number.slice(-4);
  const logo = props.type === 'Visa' ? logoVisa : logoMasterCard;
  const logoClassName =
    props.type === 'Visa' ? 'logo-visa' : 'logo-master-card';
  const creditCardStyle = {
    ...styles,
    backgroundColor: props.bgColor,
    color: props.color,
  };
  console.log(creditCardStyle);

  return (
    <div className="credit-card" style={creditCardStyle}>
      <div className={'logo ' + logoClassName}>
        <img src={logo} alt="Logo" />
      </div>
      <div className="number">
        <span className="hidden">•••• •••• •••• </span>
        <span className="visible">{visibleNumber}</span>
      </div>
      <div className="info">
        <div>
          <span className="expires">
            Expires {props.expirationMonth}/{props.expirationYear}
          </span>
          <span>{props.bank}</span>
        </div>
        <div>{props.owner}</div>
      </div>
    </div>
  );
}

export default CreditCard;
