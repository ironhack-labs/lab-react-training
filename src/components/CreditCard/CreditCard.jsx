import './CreditCard.css'
import logoMasterCard from './../../assets/images/mastercardIcon.png'
import logoVisa from './../../assets/images/visa.png'

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {
    const targetStyles = {
        backgroundColor: bgColor,
        color: color
    }
    if (expirationMonth.length === 1) {
        expirationMonth = "0" + expirationMonth
    }

    let image
    if (type === "Visa") {
        image = logoVisa
    }
    if (type === "Master Card") {
        image = logoMasterCard
    }

    const secretNumber = '\u2022'.repeat(4) + " " + '\u2022'.repeat(4) + " " + '\u2022'.repeat(4) + " " + number.slice(-4)
    return (

        <div style={targetStyles} className='CreditCard'>
            <div className='ImgContainer'>
                <img src={image} alt={type} className='logo' />
            </div>

            <div className='NumContainer'>
                <p>{secretNumber}</p>
            </div>

            <div className='ExpContainer'>
                <p>Expires {expirationMonth}/{expirationYear}   {bank}</p>
            </div>

            <div className='NameContainer'>
                <p>{owner}</p>
            </div>

        </div>

    )

}

export default CreditCard
