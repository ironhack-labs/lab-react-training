import './CreditCard.css'
import visa from './../../assets/visa.png'
import mastercard from './../../assets/mastercardIcon.png'

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {

    const creditCard = {
        backgroundColor: `${bgColor}`,
        color: `${color}`
    }

    const logo = type === 'Visa' ? visa : mastercard
    const formatedNumber = '\u25CF'.repeat(12) + number.slice(12)
    const formatedExpirationMonth = expirationMonth < 10 ? '0' + expirationMonth : expirationMonth.toString()
    const formatedExpirationYear = expirationYear % 100

    return (

        <article className='CreditCard' style={creditCard}>

            <img src={logo} alt={type} />

            <h2>{formatedNumber}</h2>
            <p>Expires {formatedExpirationMonth}/{formatedExpirationYear} - {bank}</p>
            <p>{owner}</p>

        </article>
    )
}

export default CreditCard