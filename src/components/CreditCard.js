function CreditCard(props) {
  return (
    <div
      className="credit-card"
      style={{ background: `${props.bgColor}`, color: `${props.color}` }}
    >
      <div className="type-img">
        <img src={props.img} alt="logo" />
      </div>
      <div className="number">•••• •••• •••• {props.number.slice(12)}</div>
      <span>
        Expires {props.expirationMonth}/{props.expirationYear}
      </span>
      <span className="bank">{props.bank}</span>
      <br></br>
      <span>{props.owner}</span>
    </div>
  );
}
export default CreditCard;
