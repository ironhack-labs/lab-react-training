import './CreditCard.css';
import visaCard from '../../assets/images/visa.png';
import masterCard from '../../assets/images/master-card.svg';

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

  const last4Digits = number.slice(-4);
  const month2Digits =`0${expirationMonth}`.slice(-2);
  const yearLast2Digits = `${expirationYear}`.slice(-2);
  const creditCardTypeLogo = type === 'Visa' ? visaCard : masterCard;

  return (
    <div className='credit-wrapper'>
      <div
        className="credit-card"
        style={{ backgroundColor: bgColor, color: color }}
      >
          <img src={creditCardTypeLogo} alt='' />
        <div className="credit-card-number">
          <p>•••• •••• •••• {last4Digits}</p>
        </div>
        <p> Expires {month2Digits}/{yearLast2Digits}<span> {bank}</span></p>
        <p>{owner}</p>
      </div>
    </div>
  );
}
