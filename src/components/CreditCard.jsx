function CreditCard(props) {
  return (
    <div
      className="one-credit-card"
      style={{ backgroundColor: props.bgColor, color: props.color }}
    >
      <p className="bank-logo">{props.type}</p>
      <p className="account-number">
        &#x2022; &#x2022; &#x2022; &#x2022; &#x2022; &#x2022; &#x2022; &#x2022;{' '}
        {props.number.slice(-4)}
      </p>
      <div className="expiration-date-bank-name">
        <p>
          Expires {props.expirationMonth}/{props.expirationYear}
        </p>
        <p>{props.bank}</p>
      </div>
      <p className="account-owner">{props.owner}</p>
    </div>
  );
}

export default CreditCard;
