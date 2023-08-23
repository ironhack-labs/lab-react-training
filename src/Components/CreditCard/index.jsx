/* eslint-disable react/prop-types */
const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) => {
  const cardStyle = {
    backgroundColor: bgColor,
    color: color,
    padding: "20px",
    borderRadius: "10px",
    width: "300px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  };
  const lastDigits = number.slice(-4);
  // Determine the card image based on the card type
  const cardImage =
    type === "Visa"
      ? "src/assets/images/visa.png"
      : "src/assets/images/master-card.svg";
  return (
    <div className="credit-card" style={cardStyle}>
      <div className="card-type">
        <img
          src={cardImage}
          alt={type}
          width="50"
          height="30"
          className="card-type-image"
        />
      </div>
      <div className="card-number">•••• •••• •••• {lastDigits}</div>
      <div className="card-expiration">
        Expires {expirationMonth}/{expirationYear}
      </div>
      <div className="card-bank">{bank}</div>
      <div className="card-owner">{owner}</div>
    </div>
  );
};
export default CreditCard;
