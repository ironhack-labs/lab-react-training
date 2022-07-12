import "./CreditCard.css"
import Visa from '../../assets/images/visa.png'
import MasterCard from '../../assets/images/master-card.svg'

const CreditCard = ({ type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color }) => {
    const lastNumbers = number.slice(11, 15)
    const twoYearDigits = String(expirationYear).slice(1, 3)
    const twoDigitMonth = expirationMonth < 10 ? `0${expirationMonth}` : expirationMonth

    let cardImage

    type === 'Visa' ? cardImage = Visa : cardImage = MasterCard


    return (

        <>
            <article className="creditCard" style={{
                backgroundColor: bgColor,
                color: color
            }}>
                <img src={cardImage} alt={type} className='cardIcon' />
                <p className="cardNumber">**** **** **** {lastNumbers}</p>
                <div className="expiry">
                    <p>Expires: {twoDigitMonth}/{twoYearDigits}</p>
                    <p>{bank}</p>
                </div>
                <p>{owner}</p>
            </article>

        </>

    )
}






export default CreditCard;