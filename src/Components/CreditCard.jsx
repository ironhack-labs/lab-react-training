import '../Styles/CreditCard.css';

function CreditCard(props) {
  return (
    <div
      className="creditCardWrapper"
      style={{ backgroundColor: props.bgColor, color: props.color }}
    >
      <div className="creditCardType">{props.type}</div>
      <div className="creditCardNumber">
        {props.number.slice(12, 16).padStart(16, '*')}
      </div>

      <div className="creditCardExpireWrapper">
        <div>
          Expires {props.expirationMonth}/{props.expirationYear}
        </div>

        <div className="creditCardBank">{props.bank}</div>
      </div>

      <div className="creditCardOwner">{props.owner}</div>
    </div>
  );
}

export default CreditCard;
