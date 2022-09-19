import masterCard from '../../assets/images/master-card.png';
import visa from '../../assets/images/visa.png';

// { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }
function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {
    const cardStyle = {
        backgroundColor: bgColor,
        color: color
    }

    const cardNumber = number.slice(-4).padStart(number.length, '*');

    return (
        <div className="credit-card" style={cardStyle}>
            <div className="card-logo">
                <img src={type === 'Visa' ? visa : masterCard} alt="card logo" />
            </div>
            <div className="card-number">
                <p>{cardNumber}</p>
            </div>
            <div className="card-info">
                <p>Expires {expirationMonth}/{expirationYear} {bank}</p>
                <p>{owner}</p>
            </div>
        </div>
    )
}
export default CreditCard;