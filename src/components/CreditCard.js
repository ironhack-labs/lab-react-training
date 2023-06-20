import Visa from '../assets/images/visa.png'
import MasterCard from '../assets/images/master-card.png'

export default function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {
   
    const style = { backgroundColor: bgColor, color };
    
    return (
        <div className="credit-card" style={style}>
            {type === "Visa" && <img src={Visa} alt={type} />}
            {type === "Master Card" && <img src={MasterCard} alt={type} />}
            <span className="number">●●●● ●●●● ●●●● {number.slice(-4)}</span>
            <div className="bottom-left">
                <div>
                    <span className="expiration">Expires {expirationMonth.toString().padStart(2, '0')}/{expirationYear}</span>
                    <span className="bank">{bank}</span>
                </div>
                <span className="owner">{owner}</span>
            </div>
        </div>
    )
}