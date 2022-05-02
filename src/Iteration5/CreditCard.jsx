import Visa from "./../assets/images/visa.png"
import Mastercard from "./../assets/images/master-card.svg"
import "./styles.css"

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {
    let typeImage
    if (type === 'Visa') {
        typeImage = Visa
    } else if (type === 'Master Card') {
        typeImage = Mastercard
    }

    let cardNumber = number.slice(-4) 
    const backgroundColor = `${bgColor}`


return (
    <div className="creditCard" style={{ backgroundColor, color}}>
        <div className="cardHeader">
            <img src={typeImage} alt="Visa/Mastercard" />
        </div>
        <div className="cardNumber"><strong>···· ···· ···· </strong> {cardNumber} </div>
        <div>
            <p>Expires {expirationMonth}/{expirationYear}  {bank}</p>
            <p>{owner}</p>
        </div>
    </div>
)
}

export default CreditCard