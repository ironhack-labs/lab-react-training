import './CreditCard.css'
import visa from '../../assets/images/visaIcon.png'
import mastercard from '../../assets/images/mastercardIcon.png'

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {

    let image
    const lastDigits = number.slice(-4)
    let expires

    if (expirationMonth < 10) {
        expires = `0${expirationMonth} / ${expirationYear}`
    }
    else expires = `${expirationMonth} / ${expirationYear}`


    if (type === 'Master Card') {
        image = visa
    }
    else if (type === 'Visa') {
        image = mastercard
    }

    const style = {
        backgroundColor: bgColor,
        color: color
    }

    return (
        <div className='CreditCard' style={style}>
            <div className='CreditCardImg'>
                <img src={image} alt="icon" />
            </div>
            <div className='CreditCardNum'>
                <p>**** **** **** {lastDigits}</p>
            </div>
            <div className='CreditCardBank'>
                <p>Expires {expires}</p>
                <p>{bank}</p>
            </div>
            <div>
                <p>{owner}</p>
            </div>
        </div>
    )
}

export default CreditCard