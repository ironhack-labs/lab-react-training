import logoVisa from './../assets/images/visa.svg';
import logoMasterCard from './../assets/images/master-card.svg';

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
    <article
      className="credit-card"
      style={{ backgroundColor: bgColor, color: color }}
    >
      {type === 'Visa' || type === 'Master Card' ? (
        <img
          width="50"
          alt={type}
          src={type === 'Master Card' ? logoMasterCard : logoVisa}
        />
      ) : null}
      <h4 style={{ color: color }}>
        {'•'.repeat(12)} {number.slice(-4)}{' '}
      </h4>
      <small>
        <strong>{owner}</strong>
        <br />
        Expires {expirationMonth < 10 ? '0' + expirationMonth : expirationMonth}
        /{expirationYear}&emsp;{bank}
      </small>
    </article>
  );
}

export default CreditCard;
