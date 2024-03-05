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
  const maskedNumber = '•••• ' + number.slice(-4);

  const formattedMonth = ('0' + expirationMonth).slice(-2);

  const formattedYear = expirationYear.toString().slice(-2);

  const cardStyle = {
    backgroundColor: bgColor,
    color: color,
    padding: '20px',
    borderRadius: '10px',
    width: '300px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
  };

  return (
    <div style={cardStyle}>
      <p>{type}</p>
      <p>{maskedNumber}</p>
      <p>
        Expires {formattedMonth}/{formattedYear}
      </p>
      <p>{bank}</p>
      <p>{owner}</p>
    </div>
  );
};

export default CreditCard;
