import Visa from './../assets/images/visa.png'
import Master from './../assets/images/mastercardIcon.png'

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {

    const typeCard = type === "Visa" ? <img src={Visa} alt="Logotipo" /> : <img src={Master} alt="Logotipo" />


    return (
        <div className="Credit" style={{ backgroundColor: bgColor, color: color }}>
            {typeCard}
            <p>{number}</p>
            <p><strong>Expires: </strong>{expirationMonth}/{expirationYear} </p>
            <p>{bank}</p>
            <p>{owner}</p>

        </div>
    )
}

export default CreditCard
