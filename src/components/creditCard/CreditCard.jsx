import Visa from '../../assets/images/visa.png'
import MarterCard from '../../assets/images/mastercard.png'

function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {
    let cardStyle = {
        backgroundColor: `${bgColor}`,
        color: `${color}`
    }

    function result(type) {
        if (type === 'Visa') {
            return Visa
        } else {
            return MarterCard
        }
    }

    return (
        <div className="card" style={cardStyle}>
            <div className="data-card">
                <p>{number}</p>
                <p><b>Expires:</b> {expirationMonth}/{expirationYear}  {bank}</p>
                <p>{owner}</p>
            </div>
            <div className="img-card">
                <img src={result(type)} />
            </div>
        </div>
    )
}

export default CreditCard;