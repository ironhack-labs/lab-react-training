import Mastercard from "../assets/images/master-card.svg"; 
import Visa from "../assets/images/visa.png"; 
import "../components/css/CreditCard.css" 

function CreditCard({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}){
    type === "Mastercard" ? type = Mastercard : type = Visa
    
    return (
        <div className="creditCard" style={{backgroundColor: `${bgColor}`, color}}>
            <img src={type} alt={type} />
            <p className="cardNumber">{number.slice(-4)}</p> 
            <div>
                <div className="bankAndExpiration">
                    <p>`Expires: ${expirationMonth}/${expirationYear}`</p>
                    <p>{bank}</p>
                </div>
            </div>
            <p className="owner">{owner}</p> 
        </div>
    )
}

export default CreditCard;