function CreditCard(props) {
  return (
    <div
      className="singleCC"
      style={{ color: props.color, backgroundColor: props.bgColor }}
    >
      {props.type === 'Visa' ? (
        <img
          src={require('../assets/images/visa.png')}
          alt="visa logo"
          className="logo"
        />
      ) : (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
          alt="mastercard logo"
          className="logo"
        />
      )}
      <h3 className="ccNumber">···· ···· ···· {props.number.slice(12)}</h3>
      <span>
        Expires {props.expirationMonth}/
        {props.expirationYear.toString().slice(2)}
      </span>
      <span className="bankName">{props.bank}</span>
      <p>{props.owner}</p>
    </div>
  );
}

export default CreditCard;
