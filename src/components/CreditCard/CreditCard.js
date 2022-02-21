import './CreditCard.css'
import visaLogo from '../../assets/images/visa.png'
import masterCardLogo from '../../assets/images/master-card.svg'

const CreditCard = ({
    type, number, expirationMonth, expirationYear,
    bank, owner, bgColor, color
}) => {

    const creditCardStyle = {
        backgroundColor: `${bgColor}`,
        color: `${color}`
    }

    const cardLogo = type === 'Visa' ? visaLogo : masterCardLogo


    return (
        <article className="CreditCard" style={creditCardStyle}>
            <div className="logo">
                <img src={cardLogo} alt="logo"></img>
            </div>
            <div className="secretnumber">
                <h3>···· ···· ···· ···· {number.slice(8, 12)}</h3>
            </div>
            <div className="info">
                <p>Expires {expirationMonth}/{expirationYear}   {bank}</p>
                <p>{owner}</p>
            </div>

        </article>
    )
}

export default CreditCard