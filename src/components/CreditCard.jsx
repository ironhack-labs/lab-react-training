import "../styles/CreditCard.css"
import Visa from './../assets/images/visa.png'
import MasterCard from './../assets/images/master-card.svg'

const CreditCard = ({ number, type, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {
    let backgroundColor = `${bgColor}`
    let route = ""
    if (type === "Visa") {
        route = Visa
    } else if (type === "Master Card") {
        route = MasterCard
    }
    let numberCard = "···· ···· ···· " + number.slice(-4)
    return (
            <div className="creditCard" style={{ backgroundColor, color }}>
                <figure><img src={route} alt="adfdf" /></figure>
                <p className="numberCard">{numberCard}</p>
                <div className="leftInfo">
                    <p className="expires">Expires: {expirationMonth}/{expirationYear} | {bank}</p>
                    <p className="owner">{owner}</p>
                </div>

            </div>
    )
}
export default CreditCard