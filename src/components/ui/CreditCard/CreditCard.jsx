import './CreditCard.css';
import visa from '../../../assets/images/visa.png';
import mastercard from '../../../assets/images/master-card.svg';

function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {

  const numberFormatted = `•••• •••• •••• ${number.slice(12)}`
  const monthFormatted = expirationMonth < 10 ? `0${expirationMonth}` : expirationMonth;
  const yearFormatted = expirationYear.toString().slice(2); // Utiliza expirationYear directamente si esperas que sea un string de dos dígitos

  return (
    <div className='creditcard-container' style={{backgroundColor: `${bgColor}`, color: `${color}`}}>
      <img src={type === 'Visa' ? visa : mastercard} alt='card image' className={type === 'Visa' ? 'creditcard-visa-image' : 'creditcard-mastercard-image'}/>
      <p className='creditcard-number'>{numberFormatted}</p>

      <div className='creditcard-second-container'>
        <div className='creditcard-expires'>
          <p>Expires {monthFormatted}/{yearFormatted}</p>
          <p>{bank}</p>
        </div>
        <p className='creditcard-owner'>{owner}</p>
      </div>
    </div>
  );
}

export default CreditCard;