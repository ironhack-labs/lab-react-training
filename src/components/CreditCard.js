import masterCardLogo from "../assets/images/master-card.svg"
import visaCardLogo from "../assets/images/visa.png"

const CreditCard = props => {
    let logoToUse = props.type === "Master Card" ? masterCardLogo : visaCardLogo
    let expirationMonth = props.expirationMonth < 10 ? "0" + props.expirationMonth.toString() : props.expirationMonth.toString()
    return (
        <div className="creditCardDiv" style={{backgroundColor: props.bgColor, color: props.color}}>
            <img src={logoToUse} alt="card-type-logo" />
            <div className="cardNum">
                <p>&bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; {props.number.slice(-4)}</p>
            </div>
            <div className="otherCardInfo">
                <p>Expires {expirationMonth}/{props.expirationYear.toString().slice(0,2)} &nbsp; &nbsp; &nbsp;{props.bank}</p>
                <p>{props.owner}</p>

            </div>
        </div>
    )
}

export default CreditCard