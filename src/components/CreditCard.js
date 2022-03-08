import visa from '../assets/images/visa.png';
import master from '../assets/images/master-card.svg';

function CreditCard(props) {
  let srcBandeira = '';
  props.type === 'Visa' ? (srcBandeira = visa) : (srcBandeira = master);

  return (
    <div
      className="card"
      style={{ backgroundColor: props.bgColor, color: props.color }}
    >
      <div className="card-img">
        <img src={srcBandeira} alt="bandeira do cartão" />
      </div>

      <div className="card-number">
        <p> •••• •••• •••• {props.number.substr(12)}</p>
      </div>

      <div className="card-expires-and-bank">
        <span>
          Expires {props.expirationMonth.toString().padStart(2, '0')}/
          {props.expirationYear.toString().slice(-2)}
        </span>
        <span className="card-bank">{props.bank}</span>
      </div>
      <div className="card-owner">
        <p>{props.owner}</p>
      </div>
    </div>
  );
}
export default CreditCard;
