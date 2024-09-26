import visaImg from '../assets/images/visa.png';

function CreditCard(props) {
  let ccNumber = props.number.slice(12).toString();
  let show = ccNumber.padStart(15, '*');
  return (
    <div
      className="creditCard"
      style={{ backgroundColor: `${props.bgColor}`, color: `${props.color}` }}
    >
      <p className="brand">
        <img src={visaImg} alt="type of cc" className="ccImg"></img>
      </p>
      <h1 className="creditNum">{show}</h1>

      <div className="creditExp">
        <p>Expires {props.expirationMonth} /</p>
        <p> {props.expirationYear}</p>
        <p className="bank">{props.bank}</p>
      </div>

      <p className="owner">{props.owner}</p>
    </div>
  );
}

export default CreditCard;
