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
  const hiddenNumber = `***** ***** ${number.slice(-4)}`;
  return (
    <div style={{ backgroundColor: bgColor }}>
      <div>{type}</div>
      <div>{hiddenNumber}</div>
      <div>
        {expirationMonth}/{expirationYear}
      </div>
      <div>{bank}</div>
      <div>{owner}</div>
    </div>
  );
}

export default CreditCard;
