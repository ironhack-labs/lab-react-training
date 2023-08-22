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
    backgroundColor: bgColor,
    color: color,
  };

  const hideNumbers = number.slice(-4);

  return (
    <div style={cardStyle}>
      <p>{type}</p>
      <p>•••• •••• •••• {hideNumbers}</p>
      <p>
        Expires {expirationMonth}/{expirationYear} {bank}
      </p>
      <p>{owner}</p>
    </div>
  );
}
export default CreditCard;
