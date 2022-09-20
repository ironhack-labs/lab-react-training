import mastercard from "../assets/images/master-card.png"
import visa from "../assets/images/visa.png"

const CreditCard = (props) => {

    return (
        <div className="creditCard" style={{ backgroundColor: `${props.bgColor}`, color: `${props.color}` }}>
            <div className="creditCardImg">
                {props.type === "Visa" ? <img src={visa} /> : null}
                {props.type === "Master Card" ? <img src={mastercard} /> : null}
            </div>

            <div className="creditCardText">
                <p className="secretNumber">**** **** **** {props.number.toString().slice(-4)}</p>
                <p>Expires: {props.expirationMonth} {props.expirationYear}</p>
                <p>{props.bank}</p>
                <p>{props.owner}</p>
            </div>

        </div>)
}

export default CreditCard
