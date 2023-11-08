import '../assets/styles/credit-card.css';

function CreditCard(props) {
  const imgSrcTypeCard =
    props.type === 'Visa'
      ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Visa_Logo.png/640px-Visa_Logo.png'
      : 'https://upload.wikimedia.org/wikipedia/commons/7/72/MasterCard_early_1990s_logo.png';

  const formattedNumber = `**** **** **** ${props.number.slice(-4)}`;

  const style = {
    backgroundColor: `${props.bgColor}`,
    color: `${props.color}`,
  };

  return (
    <div className="credit-card" style={style}>
      <div className="img-card">
        <img src={imgSrcTypeCard} alt="type-card" />
      </div>
      <div className="number-credit-card">{formattedNumber}</div>
      <div className="expiration-bank">
        <div className="expiration">
          Expires {props.expirationMonth.toString().padStart(2, 0)}/
          {props.expirationYear}
        </div>
        <div className="bank">{props.bank}</div>
      </div>
      <div className="owner">{props.owner}</div>
    </div>
  );
}

export default CreditCard;
