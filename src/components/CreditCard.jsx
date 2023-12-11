function CreditCard(props){
    const {bgColor, color, type, number, expirationMonth, expirationYear, bank, owner} = props;

    const divStyle = {
        backgroundColor: bgColor,
        color: color
    }

    const formattedMonth = expirationMonth < 10 ? `0${expirationMonth}` : expirationMonth;

    const maskedNumber = `•••• •••• •••• ${number.slice(-4)}`

    return(
        <div className="credit-card" style={divStyle}>
            <p className="credit-card-type">{type}</p>
            <p className="credit-card-number">{maskedNumber}</p>
            <p className="credit-card-date-bank">Expires {formattedMonth}/{expirationYear} <span>{bank}</span></p>
            <p className="credit-card-owner">{owner}</p>
        </div>
    )
}

export default CreditCard;