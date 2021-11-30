import visa from '../assets/images/visa.png'
import masterCard from '../assets/images/master-card.svg'
import './CreditCard.css'

function CreditCard(props) {
    const {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = props.card
    return (
      <div className="CreditCard" style={{backgroundColor: bgColor, color: color}}>
        <div className="imageBox">
            {type === "Visa" ? <img src={visa} alt= "Visa"/> : <img src={masterCard} alt= "mastercard"/>}
        </div>
        <h4>{number.toString().replace(/.(?=.{4})/g, '·')}</h4>
        <p>Expires {expirationMonth},{expirationYear}   {bank}</p>
        <p>{owner}</p>
      </div>
    );
}

export default CreditCard;