import visa from "../assets/images/visa.png";

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
  const cardType = type === "Visa" ? "visa.png" : "master-card.png";
  const cardStyle = {
    backgroundColor: bgColor,
    color: color,
  };

  return (
    <div className="w-64 rounded-lg p-4 mb-4" style={cardStyle}>
      <img src={visa} alt={type} className="h-8 mb-4" />
      <div className="text-xl mb-4">•••• •••• •••• {number.slice(-4)}</div>
      <div className="flex justify-between mb-2">
        <span>
          Expires {String(expirationMonth).padStart(2, "0")}/{expirationYear}
        </span>
        <span>{bank}</span>
      </div>
      <div>{owner}</div>
    </div>
  );
};

export default CreditCard;
