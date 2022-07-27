function CreditCard({type, number, expirationMonth, expirationYear, bank,owner, bgColor, color}){
    
    let year = expirationYear.toString().slice(-2)
    const last4Str = String(number).slice(-4); // 👉️ '6789'
    const last4Num = Number(last4Str)

    return(
    <div className="item-creditcard">
        <div  className="single-creditcard" style={{backgroundColor: `${bgColor}`, color: `${color}`, borderColor: `${bgColor}`}}>
            <span className="type">{type}</span>
            <h6>**** **** **** {last4Num}</h6>
            <div className="card-data">
                <p>Expires {expirationMonth}/{year}        {bank}</p><br />
                <p>{owner}</p>
            </div>

        </div>
    </div>
    );
}

export default CreditCard;