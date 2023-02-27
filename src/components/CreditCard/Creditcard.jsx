import VisaImg from './../../assets/images/visa.png'
import MastercardImg from './../../assets/images/mastercard.png'
import './CreditCard.css'


const CreditCard = ({ creditCard }) => {
    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = creditCard
    const lastNumbers = number.substr(-4)
    let month
    expirationMonth > 10 ? month = expirationMonth : month = `0${expirationMonth}`
    const year = expirationYear.toString().substr(-2)
    let img
    type === 'Visa' ? img = VisaImg : img = MastercardImg
    const divStyle = {
        backgroundColor: bgColor,
        color: color
    }

    return (
        <div className='CreditCard' style={divStyle}>
            <div className='CardLogo'>
                <img src={img} alt={type} />
            </div>
            <h2>●●●● ●●●● ●●●● {lastNumbers}</h2>
            <div className='flex'>
                <p>Expires {month}/{year}</p>
                <p>{bank}</p>

            </div>
            <p className='Name'>{owner}</p>
        </div>
    )
}

export default CreditCard