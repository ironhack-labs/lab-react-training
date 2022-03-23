import './CreditCard.css'
import visa from "../../assets/images/visa.png"
import mastercard from "../../assets/images/master-card.svg"

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {
    return (
        <div className="credit-card" style={{backgroundColor: `${bgColor}`, color: `${color}`}}>
            <div className="credit-logo-div">
                <img src={type === "Visa" ? visa : mastercard} className="credit-logo"/>
            </div>

            <h3>{"**** **** **** " + number.split("").splice(number.length - 4, 4).join("")}</h3>
            

            <div className="card-info">
                <div className="expire-bank">
                    <p>Expires: {expirationMonth.toString().length < 2 ? `0${expirationMonth}` : expirationMonth}/{expirationYear.toString().split("").splice(expirationYear.length -2, 2).join("")}</p>
                    <p>{bank}</p>
                </div>
                <p>{owner}</p>
            </div>
        </div>
    )
}

export default CreditCard