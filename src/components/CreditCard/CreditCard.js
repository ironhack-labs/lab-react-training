import './CreditCard.css'
import Visa from '../../assets/images/visa.png'
import MasterCard from '../../assets/images/master-card.svg'

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {

    let image

    if (type === 'Visa') {
        image = Visa
    }

    if (type === 'Master Card') {
        image = MasterCard
    }

    const divStyle = {
        backgroundColor: `${bgColor}`,
        color: `${color}`
    }

    return (
        <article style={divStyle} className="creditCard">
            <img src={image} alt={type} />
            <h2>···· ···· ···· {number.slice(-4)}</h2>
            <div className="cardInfo">
                <p>Expires {expirationMonth}/{expirationYear}</p>
                <p>{bank}</p>
            </div>
            <p>{owner}</p>
        </article>
    )
}

export default CreditCard