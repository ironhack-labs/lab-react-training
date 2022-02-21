import "./CreditCard.css"
import Visa from "./../../assets/images/visa.png"
import MasterCard from "./../../assets/images/master-card.svg"
const CreditCard = props => {

    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props
    let cardImageSrc = ""
    let styles = {
        backgroundColor: `${bgColor}`,
        color: `${color}`
    }
    if (type === "Visa") cardImageSrc = Visa
    if (type === "Master Card") cardImageSrc = MasterCard
    return (
        <div className="creditCard" style={styles}>
            <img src={cardImageSrc} alt={type} />
            <h4>•••• •••• •••• {number.slice(-4)}</h4>
            <div className="expireAndBank">
                <span>Expires {expirationMonth}/{expirationYear.toString().slice(-2)}</span>
                <span>{bank}</span>
            </div>
            <span>{owner}</span>
        </div>
    )
}
export default CreditCard