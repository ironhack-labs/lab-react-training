export default function CreditCard({
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
    <div className="CreditCard" style={{ backgroundColor: bgColor, color }}>
      {type === 'Visa' && (
        <img
          src="https://logos-marques.com/wp-content/uploads/2021/07/VISA-logo.png"
          alt=""
        />
      )}
      {type === 'Master Card' && (
        <img
          src="https://1000logos.net/wp-content/uploads/2017/03/MasterCard-Logo-1990.png"
          alt=""
        />
      )}
      <div className="CreditCard-number">
        <span>••••</span>
        <span>••••</span>
        <span>••••</span>
        <span>{number.slice(number.length - 4)}</span>
      </div>
      <div className="CreditCard-info">
        <p>
          Expires {expirationMonth}/{expirationYear}{' '}
          <span className="CreditCard-bank">{bank}</span>
        </p>
        <p>{owner}</p>
      </div>
    </div>
  );
}
