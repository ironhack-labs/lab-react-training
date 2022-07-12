import Visa from "./../../assets/images/visa.png"
import Mastercard from "./../../assets/images/master-card.svg"

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {

    let imageType
    let cardNumber = number.slice(-4)
    let backgroundColor = `${bgColor}`

    if (type === 'Visa') {
        imageType = Visa
    } else if (type === 'Master Card') {
        imageType = Mastercard
    }

    // type ? 'Visa' : imageType === Visa
    // type ? 'Master Card' : imageType === Mastercard

    return (
        <div className="creditCard" style={{ backgroundColor, color }}>
            <div className="cardHead">
                <img src={imageType} alt='credit card' />
            </div>
            <div>
                .... .... .... {cardNumber}
            </div>
            <div>
                <p>Expires {expirationMonth}/{expirationYear} {bank}</p>
                <p>{owner}</p>
            </div>
        </div>
    )
}

export default CreditCard