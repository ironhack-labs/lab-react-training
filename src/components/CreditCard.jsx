function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  const style = {
    backgroundColor: `${bgColor}`,
    color: `${color}`,
  };

  function cardNumber(number) {
    const incognitNumbers = number.slice(0, -4).replace(/\d/g, "•");
    const lastFourNumbers = number.slice(-4);
    const saferNumbers = incognitNumbers + lastFourNumbers;
    const spacedSaferNumbers = saferNumbers.replace(/(.{4})/g, " $1 ");
    return spacedSaferNumbers;
  }

  return (
    <div className="credit-card" style={style}>
      <p className="icon-card"> {type}</p>
      <p className="number">{cardNumber(number)}</p>
      <div className="expire-and-bank">
        <p className="expire">
          Expires {expirationMonth}/{expirationYear}{" "}
        </p>
        <p className="bank">{bank}</p>
      </div>
      <p className="owner">{owner}</p>
    </div>
  );
}

export default CreditCard;
