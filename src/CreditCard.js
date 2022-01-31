import "./CreditCard.css"
import masterCard from "./assets/images/master-card.svg"
import visa from "./assets/images/visa.png"

const CreditCard = (props) =>{
    const {type,number,expirationMonth, expirationYear, bank, owner, bgColor, color} = props
    let image = masterCard
    if (type === "Visa") image = visa
    return(
        <div className="CreditCard" style={{backgroundColor: bgColor, color:color}}>
            <div className="type">
                <img src={image} alt = {type}/>
            </div>
            <div className="number">
            •••• •••• •••• {number.slice(-4)}
            </div>
            <div className="expires-bank">
                <span>Expires {expirationMonth}/{expirationYear} </span>
                <span className="bank">{bank} </span>
            </div>
            <div className="owner">
                {owner}
            </div>
        </div>
    )

}

export default CreditCard;