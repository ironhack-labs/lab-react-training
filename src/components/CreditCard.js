function CreditCard(props){
    const{type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = props
    return(
        <div className="tarjeta" style={{background:`${bgColor}`, color: `${color}`}}>
            <div>{type}</div>
            <div>{number}</div>
            <div>
                <p>Expires {expirationMonth} {expirationYear}</p>
            </div>
            <div>{bank}</div>
            <div>{owner}</div>
        </div>
    )
}

export default CreditCard