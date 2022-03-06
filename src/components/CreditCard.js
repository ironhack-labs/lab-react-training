import visa from '../assets/images/visa.png';
import master from '../assets/images/master-card.svg';

function CreditCard(props) {
  let srcBandeira = '';
  props.type === 'Visa' ? (srcBandeira = visa) : (srcBandeira = master);

  return (
    <div style={{ backgroundColor: props.bgColor, color: props.color }}>
      <img src={srcBandeira} alt="bandeira do cartão" />
      <p>•••• •••• •••• {props.number.substr(12)}</p>
      <p>
        Expires {props.expirationMonth.toString().padStart(2, '0')}/
        {props.expirationYear.toString().slice(-2)} {props.bank}
      </p>
      <p>{props.owner}</p>
    </div>
  );
}
export default CreditCard;
