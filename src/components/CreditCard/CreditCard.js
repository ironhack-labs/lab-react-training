import './CreditCard.scss'

function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) {
  return (
    <div className="credit-card" style={{ backgroundColor: `${bgColor}`, color: `${color}`}}>
      <h1>{type}</h1>
      <p>●●●● ●●●● ●●●● {number.slice(-4, 16)}</p>
      <p>Expires: {expirationMonth}/{expirationYear} {bank}</p>
      <p>{owner}</p>
    </div>
  );
}

export default CreditCard;