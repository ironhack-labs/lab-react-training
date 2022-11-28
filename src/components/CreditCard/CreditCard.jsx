import MasterCard from './../../assets/images/master-card.svg'
import VisaLogo from './../../assets/images/visa.png'
import './CreditCard.css'


const CreditCard = props => {

    const {
        type,
        number,
        expirationMonth,
        expirationYear,
        bank,
        owner,
        bgColor,
        color
    } = props

    return (
        <div className='creditCard' style={{ backgroundColor: `${bgColor}`, color: `${color}` }}>

            <div className="cardLogo">
                {type === 'Visa' ? (
                    <img src={VisaLogo} alt="Visa" />
                ) : (
                    <img src={MasterCard} alt="Mastercard" className="mastercard" />
                )}
            </div>
            <div className="cardNumber">
                <p>•••• •••• •••• {number.slice(12)}</p>
            </div>
            <div className="cardInfo">
                <p>
                    Expires {expirationMonth}/{expirationYear.toString().substring(2)}
                    <span>{bank}</span>
                </p>
                <p>{owner}</p>
            </div>
        </div>
    )

}

export default CreditCard
