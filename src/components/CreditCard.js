function CreditCard(props) {
  return (
    <div className="creditCard">
      <p className="brand">{props.type}</p>
      <h1 className="creditNum">{props.number}</h1>
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
