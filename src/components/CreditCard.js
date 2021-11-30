import visa from "../assets/images/visa.png"
import masterCard from "../assets/images/master-card.svg"

function CreditCard({
                        type,
                        number,
                        expirationMonth,
                        expirationYear,
                        bank,
                        owner,
                        bgColor,
                        color
                    }) {
    return (

        <div className="credit-card" style={{"background-color": bgColor, color: color}}>
            <div className="image-wrapper">
                <img src={type === "visa" ? visa : masterCard}/>
            </div>
            < div className="number">•••• •••• •••• {number.slice(-4)}</div>
            <div className="expires-bank"><span>Expires {expirationMonth}/{expirationYear} </span><span
                className="bank">{bank}</span></div>
            <div className="owner">{owner}</div>
        </div>
    );
}


export default CreditCard;

