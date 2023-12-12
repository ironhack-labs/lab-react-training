import Visa from '../../assets/images/visa.png'
import MasterCard from '../../assets/images/master-card.svg'
import './creditcard.css'

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {
    const sliced = number.slice(-4)
    const cardNumber = `**** **** **** ${sliced}`

    return (
        <div className="CreditCard" style={{ backgroundColor: bgColor, color: color }}>
            <img src={type === "Visa" ? Visa : MasterCard} alt="" />
            <p>{cardNumber}</p>
            <p>Expiration Date: {expirationMonth}/{expirationYear}</p>
            <p>{bank}</p>
            <p>{owner}</p>
        </div>
    )
}

export default CreditCard