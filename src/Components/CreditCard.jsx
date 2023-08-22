
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
  const cardTypeImage =
    type === 'Visa'
      ? 'src/assets/images/visa.png'
      : 'src/assets/images/master-card.svg';

  const cardNumberDisplay = number.slice(-4).padStart(16, '•');

  const cardStyle = {
    backgroundColor: bgColor,
    color: color,
    padding: '20px',
    borderRadius: '10px',
    width: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  };

  const bankStyle = {
    fontSize: '20px',
    marginBottom: '10px',
  };

  return (
    <div style={cardStyle}>
      <img src={cardTypeImage} alt={type} style={{ width: '60px', marginBottom: '10px' }} />
      <div>{cardNumberDisplay}</div>
      <div>
        Expires {expirationMonth}/{expirationYear}
      </div>
      <div style={bankStyle}>{bank}</div>
      <div>{owner}</div>
    </div>
  );
};

export default CreditCard;
