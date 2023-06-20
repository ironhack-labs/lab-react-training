
export default function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {
    let picture = type === "Visa" ? "../assets/images/visa.png" : "../assets/images/master-card.svg";
   
    const style = { backgroundColor: bgColor, color };
    
    return (
        <div className="credit-card" style={style}>
            <img src={picture} alt={type} />
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