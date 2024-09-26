import './CreditCard.css'

import visaLogo from '../../assets/images/visa.png'
import mastercardLogo from '../../assets/images/mastercardIcon.png'

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {

    let logo
    if (type === "Visa") {
        logo = visaLogo
    }
    if (type === "Master Card") {
        logo = mastercardLogo
    }

    let numberFormatted = "**** **** **** " + number.toString().slice(-4)

    let yearFormatted = expirationYear.toString().slice(-2)
    let monthFormated = ""
    if (expirationMonth < 10) {
        monthFormated = "0" + expirationMonth
    } else { monthFormated += expirationMonth }


    return (
        <div className='card' style={{ backgroundColor: bgColor, color: color }}>
            <img src={logo} alt="logo" />
            <p>{numberFormatted}</p>
            <p>Expires: {monthFormated}/{yearFormatted}</p>
            <p>Bank: {bank}</p>
            <p>Owner: {owner}</p>
        </div>

    )
}

export default CreditCard
