function CreditCard({type, number, expirationMonth, expirationYear, bank,owner, bgColor, color}){
    return(
        <div style={background-color: `${bgColor}`}>
            <span>{type}</span>
            <h6>{number}</h6>
            <div>
                <p>Expires {expirationMonth}/{expirationYear}</p>
                <p>{owner}</p>
            </div>
            <div>{bank}</div>
        </div>
    );
}

export default CreditCard;