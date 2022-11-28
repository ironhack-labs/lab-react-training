import visaImage from "../../assets/images/visa.png"
import masterCardImage from "../../assets/images/mastercard.svg"
import "./CreditCard.css"

const CreditCard = props => {
    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props

    const img = type === "Visa" ? visaImage : masterCardImage

    const finalNumber = "**** **** ****" + number.substring(12, number.length)

    let newExpirationMonth = expirationMonth < 10 ? ("0" + expirationMonth).slice(-2) : expirationMonth

    const divStyle = {
        backgroundColor: bgColor,
        height: '250px',
        width: '25%',
        color: color
    }

    return (
        <div className="creditCard" style={divStyle}>
            <div className="imgContainer"><img src={img} alt="" /></div>
            <p>{finalNumber}</p>
            <div><span>Expires: {newExpirationMonth} / {expirationYear % 100} {bank}</span></div>
            <div><span>{owner}</span></div>
        </div>
    )


}
export default CreditCard