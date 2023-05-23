import './CreditCard.css'
import masterCard from '../../assets/images/evento1.png'
import visa from '../../assets/images/visa.png'
const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {
    let logo
    if (type === "Master Card") {
        logo = masterCard
    } else {
        logo = visa
    }
    return (
        <div className="card">
            <img src={logo} alt="tarjeta" />
            <p>{number}</p>
            <div>
                <p>{expirationMonth}/{expirationYear}</p>
                <p>{bank}</p>
            </div>
            <div>
                <p>
                    {owner}
                </p>
            </div>

            <p></p>

        </div>
    )
}
export default CreditCard