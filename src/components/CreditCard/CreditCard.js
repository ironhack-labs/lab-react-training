import './CreditCard.css'
import visa from './../../assets/images/visa.png'
import mastercard from './../../assets/images/mastercard.png'

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {

    const lastFourDigits = number.slice(-4)

    const logo = type === 'Visa' ? <img src={visa} alt="visa" /> : <img src={mastercard} alt="mastercard" />

    return (
        <div className='CreditCard' style={{ backgroundColor: bgColor, color: color }}>
            {logo}
            <p>{lastFourDigits}</p>
            <p><strong>Expires:</strong>{expirationMonth}/{expirationYear}</p>
            <p>{bank}</p>
            <p>{owner}</p>
        </div>
    )

}

export default CreditCard

