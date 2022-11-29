import './CreditCard.css'
import visa from '../../assets/images/visa.png'
import master from '../../assets/images/master.png'

const CreditCard = props => {
    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props
    const lastNumbers = number.slice(12);
    const month = expirationMonth.toString().length === 2 ? expirationMonth : '0' + expirationMonth.toString()
    let cardType = tp => {
        switch (tp) {
            case 'Visa':
                return visa
            default:
                return master
        }
    }
    const cardStyle = {
        backgroundColor: bgColor,
        color: color
    }

    return (
        <div>
            <div style={cardStyle}>
                <img src={cardType(type)} alt='' />
                <h2>********{lastNumbers}</h2>
                <p>Expires{month}/{expirationYear}   {bank}</p>
                <p>{owner}</p>
            </div>
        </div>

    )

}

export default CreditCard