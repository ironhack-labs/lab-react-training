import './CreditCard.css';

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
  let style = { backgroundColor: `${bgColor}`, color: `${color}` };
  return (
    <article className="creditCard" style={style}>
      <div className="logo">{type}</div>
      <div className="creditNumber">
        <p>********{number.slice(-4)}</p>
      </div>
      <footer>
        <div className="creditCardFooter">
          <p>
            {expirationMonth} {expirationYear} {bank}
          </p>
          <p>{owner}</p>
        </div>
      </footer>
    </article>
  );
}

export default CreditCard;
