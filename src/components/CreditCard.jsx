
function CreditCard (props) {
    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = props;

    const divStyle = {
        backgroundColor: bgColor,
        color: color
    }

    const maskedNumbers = `···· ···· ···· ${number.slice(-4)}`

    const formattedMonth = expirationMonth < 10 ? `0${expirationMonth}` : expirationMonth;
    const formattedYear = expirationYear.toString().slice(-2)

    return (
        <div className="creditCard" style={divStyle}>
            <p>{type}</p>
            <p>{maskedNumbers}</p>
            <p>{formattedMonth}/{formattedYear}</p>
            <p>{bank}</p>
            <p>{owner}</p>
        </div>
    )
}

export default CreditCard;