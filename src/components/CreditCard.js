
function CreditCard(props) {
  const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props;

  const cardStyle = {
    backgroundColor: bgColor,
    color: color,
    width: '300px',
    height: '150px',
    borderRadius: '10px',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    margin: '10px',
  };

  const cardType = {
    width: '50px',
    height: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '20px',
    fontWeight: 'bold',
    borderRadius: '5px',
    backgroundColor: 'white',
    color: 'black',
  };

  const cardNumber = {
    fontSize: '25px',
    fontWeight: 'bold',
  };

  const cardInfo = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  };

  const cardBank = {
    fontSize: '15px',
  };

  const cardOwner = {
    fontSize: '15px',
  };

  const cardExpiration = {
    fontSize: '15px',
  };

  return (
    <div style={cardStyle}>
      <div style={cardType}>{type}</div>
      <div style={cardNumber}>**** **** **** {number.slice(-4)}</div>
      <div style={cardInfo}>
        <div style={cardBank}>{bank}</div>
        <div style={cardOwner}>{owner}</div>
        <div style={cardExpiration}>Expires {expirationMonth}/{expirationYear % 100}</div>
      </div>
    </div>
  );
}

export default CreditCard;
