const CreditCard = (({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {
    const numeroString = number.toString()
    const numero = numeroString.substr(numeroString.length - 4, numeroString.length - 1)
    let month
    let image

    let styles = {
        backgroundColor: bgColor,
        color: color
    }

    if (expirationMonth <= 10) {
        month = "0" + expirationMonth
    } else {
        month = expirationMonth
    }

    if (type == "Visa") {
        image = '../../visa.png'
    } else {
        image = '../../mastercardIcon.png'
    }



    const year = expirationYear.toString().substr(2, 3)

    return (
        <div className="CreditCard" style={styles}>
            <div className="imagen">
                <figure>
                    <img src={image} alt={type} />
                </figure>
            </div>
            <div className="numero">
                <h2>**** **** **** {numero}</h2>
            </div>
            <div className="data">
                <p>Expires {month}/{year}   {bank}</p>
                <p>{owner}</p>
            </div>
        </div>
    )
})

export default CreditCard