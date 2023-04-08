function CreditCard({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) {

    let expiration
    if(expirationMonth.length === 1) {
        expiration = `0${expirationMonth}/${expirationYear.toString().substring(2)}`
    }
    else {
        expiration = `${expirationMonth}/${expirationYear.toString().substring(2)}`
    }

    const style = {backgroundColor: bgColor, color: color }

    const ccNumber = number.toString().substring(12)

    return (
        <div className="cc" style={style}>
            <div className="ccLogo"><img src={type} alt="" /></div>
            <div className="ccNumber">
                <p>●●●● ●●●● ●●●● <span>{ccNumber}</span></p>
            </div>
            <div className="ccData">
                <p>Expires {expiration}   {bank}</p>
                <p>{owner}</p>
            </div>
        </div>
    )
}

export default CreditCard;
