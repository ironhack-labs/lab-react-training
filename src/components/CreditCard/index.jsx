import './CreditCard.css';

export default function CreditCard(props) {
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

  const creditCardTypeLogo = {
    Visa: "/../assets/images/visa.png",
    "Master Card": '/../assets/images/master-card.svg',
    };

  const last4Digits = number.slice(-4);
  const month2Digits =`0${expirationMonth}`.slice(-2);
  const yearLast2Digits = `${expirationYear}`.slice(-2);

  return (
    <div className='credit-wrapper'>
      <div
        className="credit-card"
        style={{ backgroundColor: bgColor, color: color }}
      >
          <img src={creditCardTypeLogo[type]} alt='' />
        <div className="credit-card-number">
          <p>•••• •••• •••• {last4Digits}</p>
        </div>
        <p> Expires {month2Digits}/{yearLast2Digits}<span> {bank}</span></p>
        <p>{owner}</p>
      </div>
    </div>
  );
}
