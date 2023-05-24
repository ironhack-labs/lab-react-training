import './CreditCard.css'
import Visa from './../../assets/images/visa.png'
import Master from './../../assets/images/mastercardIcon.png'

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {

    const typeCard = type === "Visa" ? <img src={Visa} alt="Logotipo" /> : <img src={Master} alt="Logotipo" />
    const lastNumbers = number.slice(-4)


    return (
        <div className="Credit" style={{ backgroundColor: bgColor, color: color }}>
            {typeCard}
            <span>●●●● ●●●● ●●●● </span>
            <span>{lastNumbers}</span>
            <p><strong>Expires: </strong>{expirationMonth}/{expirationYear} </p>
            <p>{bank}</p>
            <p>{owner}</p>

        </div>
    )
}

export default CreditCard
