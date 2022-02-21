import "./CreditCard.css"

function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) {
    return(
        
        <div className="creditCard" style={{ backgroundColor: `${bgColor}`, color: `${color}` }}>
            <p className="type">{type}</p>
            <div>
                <p className="creditNumber">{number}</p>
            </div>
            <div>
                <div style={{display: "flex"}}>
                    <p className="expiration" style={{paddingRight: "10px"}}>Expires {expirationMonth.toString()}/{expirationYear.toString()}</p>
                    <p>{bank}</p>
                </div>
                
                <p style={{textAlign: "left"}}>{owner}</p>

            </div>
        </div>
    )
}

export default CreditCard