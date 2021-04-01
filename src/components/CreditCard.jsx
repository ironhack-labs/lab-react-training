import '../assets/css/CreditCard.css'
const CreditCard = ({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) => {
    
    let numberFormatSub = number.substr(-4)

    return (
        <div className="CreditCard container" style={{color: color}}>
            <div className="card border-light mb-3" style={{ maxWidth:'18rem', backgroundColor:`${bgColor}` }}>
                <div className="card-header">{type}</div>
                <div className="card-body">
                    <h2 className="card-title">**** **** **** {numberFormatSub}</h2>
                    <h4 className="mt-5" style={{textAlign:'left'}}>
                        Expires {expirationMonth}/{expirationYear} {bank}
                    </h4>
                    <h4 className="owner">
                        {owner}
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default CreditCard;
