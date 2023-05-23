import "./CreditCard.css"

function CreditCard({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) {
    let cardImage = ""
    if (type == "Visa") {
        cardImage = <img src={require("../assets/images/visa.png")} className="visa" alt="Visa" />
    } else if (type == "Master Card") {
        cardImage = <img src={require("../assets/images/mastercard-logo.png")} className="masterCard" alt="Master Card" /> // The logo that was initially in the assets folder gives me trouble because of it being an svg file.
        // Yabel, do I lose half a point if I write the comments in Spanish? I never know what language to use haha
    }
    let secureNumber = number.slice(-4)
    let newExpirationYear = expirationYear.toString().slice(2)


    return(
<div className="card">
    {cardImage}
    <p>•••• •••• •••• {secureNumber}</p>
    <div>
        <div className="row">
            <p className="expiration">Expires {expirationMonth}/{newExpirationYear}</p>
            <p>{bank}</p>
        </div>
        <p>{owner}</p>
    </div>
</div>
    )
}

export default CreditCard