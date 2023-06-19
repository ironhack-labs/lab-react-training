function CreditCard(props) {
  return (
    <div
      className="creditCard"
      style={{ background: props.bgColor, color: props.color }}
    >
      <p className="type">{props.type}</p>
      <p className="num">{props.number}</p>
      <p className="expiration">
        Expires {props.expirationMonth}/{props.expirationYear}{' '}
        <span>{props.bank}</span>
      </p>
      <p className="owner">{props.owner}</p>
    </div>
  );
}

export default CreditCard;
