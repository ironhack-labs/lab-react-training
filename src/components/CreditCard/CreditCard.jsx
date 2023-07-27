
import "./CreditCard.css"
import Visa from "../../assets/images/visa.png"
import Mastercard from "../../assets/images/mastercardIcon.png"

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {

    let imageCard

    if (type === "Visa") {
        imageCard = Visa
    }


    if (type === "Master Card") {
        imageCard = Mastercard
    }


    const hiddenNumbers = number.slice(-4)
    const shorYear = expirationYear.toString().slice(-2)




    return (

        <div className="CreditCard" style={{ backgroundColor: bgColor }}>

            <img src={imageCard} alt="" />

            <p>---- ---- ---- {hiddenNumbers}</p>
            <p> Expires: {expirationMonth}/{shorYear} {bank}</p>
            <p> {owner}</p>
        </div>
    )

}

export default CreditCard