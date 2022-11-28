import visa from './visa.png'
import masterCard from './master-card.png'
import './CreditCard.css'

const CreditCard = props => {

    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props

    const flag = tp => {
        switch (tp) {
            case 'Visa':
                return visa
            default:
                return masterCard
        }
    }

    const cardStyle = {
        backgroundColor: bgColor,
        color: color
    }

    return (
        <section className="CreditCard" style={cardStyle}>
            <img src={flag(type)} alt="" />
            <p>•••• •••• •••• {number.slice(12)}</p>
            <p>Expires{expirationMonth}{expirationYear}  {bank}</p>
            <p>{owner}</p>
        </section>
    )

}

export default CreditCard