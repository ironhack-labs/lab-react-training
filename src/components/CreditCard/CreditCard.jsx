import logoVisa from '../../assets/images/visaIcon.png'
import logoMaster from '../../assets/images/mastercardIcon.png'


const creditCard = ({ infoCard }) => {

    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = infoCard

    const cardNum = number?.slice(-4)

    let cardLogo
    type === "Visa" ? cardLogo = logoVisa : cardLogo = logoMaster

    const cardStyle = {
        backgroundColor: bgColor,
        color: color
    }

    return (
        <div className='creditCard' style={cardStyle}>
            <div>
                <img src={cardLogo} alt="logo-card" />
            </div>
            <div>
                <p>•••• •••• •••• {cardNum}</p>
            </div>
            <div>
                <p>Expires {expirationMonth}/{expirationYear}   {bank}</p>
                <p>{owner}</p>
            </div>
        </div>
    )
}

export default creditCard