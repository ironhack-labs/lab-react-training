const CreditCard = (props) => {
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

  const divStyle = {
    background: bgColor,
    color: color,
  };

  return (
    <div className="card-container" style={divStyle}>
      <p>Expires:</p>
      <p>{owner}</p>
    </div>
  );
};

export default CreditCard;
