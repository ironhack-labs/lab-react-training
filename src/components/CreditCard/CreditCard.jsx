import './CreditCard.css';

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {
  const cardLogo = type === "Visa" ? "/img/visa.png" : "/img/master-card.svg";

  const cardStyle = {
    backgroundColor: bgColor,
    color: color
  };

  const logoStyle = {
    width: '50px',
    margin: '10px'
  };

  return (
    <div className="CreditCard border-box" style={cardStyle}>
      <img src={cardLogo} alt="credit card logo" style={logoStyle} className="logo" />
      <div className="card-number">
        <p>•••• •••• •••• {number.slice(-4)}</p>
      </div>
      <div className="card-data">
        <p>Expires {expirationMonth}/{expirationYear}</p>
        <p>{bank}</p>
      </div>
      <p>{owner}</p>
    </div>
  );
};

export default CreditCard;
