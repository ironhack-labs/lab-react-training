import './CreditCard.css'
import MasterCard from '../../assets/images/mastercardIcon.png'
import Visa from '../../assets/images/visa.png'

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {

    let card

    if (type === "Visa") {
        card = Visa
    }

    if (type === "Master Card") {
        card = MasterCard
    }

    let num = number.slice(-4)

    let year = expirationYear.toString().slice(-2)

    return (
        <div className="creditCard" style={{ backgroundColor: bgColor, color }}>
            <img src={card}></img>
            <p>---- ---- ---- {num}</p>
            <p>{expirationMonth}/{year} {bank}</p>
            <p>{owner}</p>
        </div>
    )
}

export default CreditCard