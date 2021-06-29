function CreditCard ({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) {
    const lastDigits = number.replace(/.(?=.{4})/g, '*');
    const twoDigitYear = expirationYear.toString().substr(-2)
    const logo = () => {
        if (type === "Visa") {
            return "img/visa.png"
        } 
        else if (type === "Master Card") {
            return "img/master-card.svg"
        }
        else {return <p>{type}</p>}
    } 

    return(
        <div className="CreditCard" style={{backgroundColor: `${bgColor}`, color: `${color}`}} >
            <div className="type">
                <img src={logo()} alt={type} />
            </div>
            <div className="number">{lastDigits}</div>
            <div>
                <p>Expires {expirationMonth}/{twoDigitYear} <span className="bank">{bank}</span></p>
            </div>
            <div>{owner}</div>
        </div>
    )
}

export default CreditCard