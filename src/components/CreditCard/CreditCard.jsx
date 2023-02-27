import './CreditCard.css'
import Visa from '../../assets/images/visaIcon.png'
import MasterCard from '../../assets/images/mastercardIcon.png'

const CreditCard = ({ card }) => {

    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = card

    const cardStyle = {
        backgroundColor: bgColor,
        color: color
    }

    let cardType = type === 'Visa' ? Visa : MasterCard

    const fourLastNum = number.toString().substr(-4);

    return (
        <div className="creditCard" style={cardStyle}>
            <div className='imageType'>
                <img src={cardType} alt={type} />
            </div>
            <div className='cardNumber'>
                <span className='dots'>&middot;&middot;&middot;&middot; &middot;&middot;&middot;&middot; &middot;&middot;&middot;&middot; </span>
                <span> {fourLastNum}</span>
            </div>
            <div className="expiration">
                <span>Expires {expirationMonth}/{expirationYear}</span>
                <span>{bank}</span>
            </div>
            <p className='name'>{owner}</p>

        </div>
    )
}

export default CreditCard