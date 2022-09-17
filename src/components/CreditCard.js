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
  return (
    <div
      style={{
        height: 40,
        backgroundColor: { bgColor },
      }}
    >
      <span className="number">{number}</span>
      <span className="expirationMonth">{expirationMonth}</span>
      <span className="expirationYear">{expirationYear}</span>
      <span className="bank">{bank}</span>
      <span className="owner">{owner}</span>
    </div>
  );
}

export default CreditCard;
