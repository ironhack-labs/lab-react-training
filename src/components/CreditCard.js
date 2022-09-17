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
  return (
    <div style={{ backgroundColor: `${bgColor}`, color: `${color}` }}>
      <div>{type}</div>
      <div>
        <h4>{number}</h4>
      </div>
      <div>
        <h4>
          {expirationMonth}/{expirationYear}
        </h4>
        <h4>{bank}</h4>
        <h4>{type}</h4>
        <h4>{owner}</h4>
      </div>
    </div>
    // Bonus para el código hex converter
  );
}

export default CreditCard;
