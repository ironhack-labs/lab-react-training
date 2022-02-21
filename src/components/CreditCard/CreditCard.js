import "./CreditCard.css"

const CreditCard = (props) => {
    let {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props

    let source = ""

    if(type === "Visa") {
        source = "https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
    } else {
        source = "https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
    }

    let lastDigits = number.toString().slice(-4)
    
    return (
        <div className="creditCard" style={{backgroundColor:`${bgColor}`,color:`${color}`}}>
            <img src={source} ></img>
            <h3>···· ···· ···· {lastDigits}</h3>
            <p>Expires {expirationMonth}/{expirationYear} {bank}</p>
            <p>{owner}</p>
        </div>
    )
}

export default CreditCard