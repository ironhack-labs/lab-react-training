import './CreditCard.css';
import imgVisa from '../../assets/images/visa.png';
import imgMaster from '../../assets/images/master-card.svg';

function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {

  const typeCard = (type.toLowerCase() === 'visa') ? imgVisa : imgMaster; 

  return (
      <div className="credit-card" style={{backgroundColor: `${bgColor}`, color: `${color}`}}>
        <div className="logo"><img src={typeCard} alt="type"></img></div>
        <div className="numbers">**** **** **** {number.slice(-4)}</div>
        <div className="info">
          <div className="expiration">Expires {expirationMonth}/{expirationYear}</div>
          <div className="bank">{bank}</div>
        </div>
        <div className="owner">{owner}</div>

      </div>
  )
}

export default CreditCard;