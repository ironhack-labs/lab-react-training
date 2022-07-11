import './creditCard.css'
import visaLogo from '../../assets/images/visa.png'
import mastercardLogo from "../../assets/images/master-card.svg"

const CreditCard = ({
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
}) => {


    const cardColor = {
        backgroundColor: bgColor,
        color: color
    }

    let imgSrc = ''
    switch (type) {
        case 'Visa':
            imgSrc = visaLogo
            break
        case 'Master Card':
            imgSrc = mastercardLogo
            break
        default:
            type = "Type of bank network"
            imgSrc = ""
    }

    const displayedNumbers = `•••• •••• •••• ${number.substr(-4)}`

    return (
        <figure className='creditCard' style={cardColor}>
            <img src={imgSrc} alt={`${type} logo`} />
            <p className='numbers'>{displayedNumbers}</p>
            <p>Expires {expirationMonth >= 10 ? expirationMonth : "0" + expirationMonth}/{expirationYear} {bank}</p>
            <p>{owner}</p>
        </figure>
    )
}

export default CreditCard