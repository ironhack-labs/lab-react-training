import Visa from './../assets/images/visa.png'
import MasterCard from './../assets/images/mastercardIcon.png'
import './CreditCard.css'

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {

    return (
        <div className="CreditCard" style={{backgroundColor: bgColor, color: color}}>
            <img src={type === "Visa" ? Visa : MasterCard} alt="" />
            <p>{number}</p>
            <p>Expiration Date: {expirationMonth}/{expirationYear}</p>
            <p>{bank}</p>
            <p>{owner}</p>

        </div>
    )
}

export default CreditCard