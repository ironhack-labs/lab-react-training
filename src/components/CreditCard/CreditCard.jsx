import "./CreditCard.css"


function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {
    return (
        <div className="borderCard"  style={{backgroundColor: bgColor}}>
            <div className="type">
                 <h6 style={{color: color}}>{type} {bank}</h6>
            </div>
            <div className="data">
                <div>
                    <h4 style={{color: color}}>{number}</h4>
                </div>
                <div className="name">
                    <h2 style={{color: color}}>{owner}</h2>
                </div>
                <div className="date">
                    <p style={{color: color}}>Expires {expirationMonth/expirationYear}</p>
                </div>
            </div>
        </div>
    )
}


export default CreditCard;