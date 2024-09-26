import './CreditCard.css'
import Visa from '../../assets/images/visa.png'
//import MasterCard from '../../assets/images/master-card.svg'

const CreditCard = ({ card }) => {

    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = card

    const cardStyle = {
        backgroundColor: bgColor,
        color: color
    }

    let cardType = type === 'Visa' 

    const fourLastNum = number.toString().substr(-4);

    return (
        <div className="creditCard" style={cardStyle}>
            <div className='imageType'>
                <img src={cardType} alt={type} />
            </div>
            <div className='cardNumber'>
            {/* esto sirve para ocultar los números */}
                <span className='dots'>&middot;&middot;&middot; </span> 
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