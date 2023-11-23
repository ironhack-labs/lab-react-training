import "./CreditCard.css"


const CreditCard = ({
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color
}) => {

    let secureNumber = number.slice(-4)

    let typeImg

    if (type === "Visa") {
        typeImg = "src/assets/mastercardIcon.png"
    } else if (type === "Master Card") {
        typeImg = "src/assets/visa.png"
    }

    if (expirationMonth < 10) {
        expirationMonth = "0" + expirationMonth
    }

    expirationYear = expirationYear.toString().slice(-2)

    return (
        <div className="CreditCard" style={{ backgroundColor: bgColor, color: color }}>
            <img src={typeImg} alt={type} />
            <p>**** **** **** {secureNumber}</p>
            <p>Expires {expirationMonth}/{expirationYear}</p>
            <p>{bank}</p>
            <p>{owner}</p>

        </div>
    )
}

export default CreditCard