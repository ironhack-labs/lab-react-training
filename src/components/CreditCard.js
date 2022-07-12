import visa from '../assets/images/visa.png';
import mastercard from '../assets/images/mastercard.png';
import './CreditCard.css';

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {
  const logo = type === `Visa` ? visa : mastercard;

  return (
    <div className="credit-card"
      style={{
        backgroundColor: `${bgColor}`,
        color,
      }}
    >
      <img src={logo} alt={type} />
      <p className='card-number'>{`⏺⏺⏺⏺ ⏺⏺⏺⏺ ⏺⏺⏺⏺ ` + number.slice(-4)}</p>
      <div>
        <div className="info">
          <p>{`Expires: ${expirationMonth}/${expirationYear}`}</p>
          <p>{bank}</p>
        </div>
        <p className='owner'>{owner}</p>
      </div>
    </div>
  )
}

export default CreditCard 