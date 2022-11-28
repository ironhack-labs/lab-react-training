import './CreditCard.css'
import visaCard from './../assets/images/visa.png'
import masterCard from './../assets/images/master-card.png'

const CreditCard = props => {
    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props
    const logoCredCard = type === 'Visa' ? visaCard : masterCard

    return (
        <div className='CreditCard' style={{ backgroundColor: `${bgColor}`, color: `${color}` }}>

            <img className='logoCard' src={logoCredCard}></img>
            <h3>{number}</h3>
            <p> Expires {expirationMonth}/{expirationYear}<span> {bank}</span></p>
            <p>{owner}</p>

        </div >
    )
}

export default CreditCard






