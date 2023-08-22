import "../components.css";

function CreditCard(props) {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;

  const cardStyle = {
    background: bgColor,
    color: color,
  };

  const lastDigits = number.slice(-4);

  return (
    <div style={cardStyle} className="CreditCard">
      <p>{type}</p>
      <p>**** **** **** {lastDigits}</p>
      <p>
        Expires {expirationMonth}/{expirationYear}
      </p>
      <p>{bank}</p>
      <p>{owner}</p>
    </div>
  );
}

export default CreditCard;
