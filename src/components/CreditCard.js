import visa from '../assets/images/visa.png';
import masterCard from '../assets/images/master-card.png';

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
  const ccNumber = () => {
    const lastDigits = number.substring(number.length - 4);

    const num = number
      .substring(number.length)
      .padStart(number.length, String.fromCodePoint(9679))
      .slice(0, -4)
      .replace(/(\W{4}(?!\s))/g, '$1 ');

    return {
      num,
      lastDigits,
    };
  }

  const expirationMonthFormatted = () => {
    return expirationMonth < 10 ? '0' + expirationMonth : expirationMonth;
  }

  const num = ccNumber().num;
  const lastDigits = ccNumber().lastDigits;

  return (
    <div style={{ backgroundColor: bgColor, color }} className="card">
      <div className="card-header">
        <div className="type-name">
          <img src={type === 'Visa' ? visa : masterCard} alt={type} />
        </div>
      </div>
      <div className="card-number">
        <span className="cc-mask">{num}</span>
        <span className="cc-open">{lastDigits}</span>
      </div>
      <div className="card-footer">
        <div className="card-data">
          <div className="expires">
            Expires {expirationMonthFormatted}/{expirationYear}{' '}
            <span className="bank-name">{bank}</span>
          </div>
          <div className="owner-name">{owner}</div>
        </div>
      </div>
    </div>
  );
}
