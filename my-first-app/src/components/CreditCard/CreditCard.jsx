import visa from "../../assets/visa.png"
import mastercard from "../../assets/mastercardIcon.png"
import "./CreditCard.css"

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {

    const colors = { backgroundColor: bgColor, color: color }

    const cards = {
        "Visa": <img src={visa} alt="Visa" style={{ height: 40 }} />,
        "Master Card": <img src={mastercard} alt="MasterCard" style={{ height: 40 }} />
    }


    return (
        < div style={colors} className="card">
            <div className="cardLogo">

                {cards[type]}

            </div>
            <div className="cardNumber">
                ···· ···· ···· {number.slice(12, 16)}
            </div>
            <div className="cardValue">
                Expires: {expirationMonth.toString().padStart(2, "0")} / {expirationYear.toString().slice(2, 4)}    {bank}
                <br />
                {owner}
            </div>



        </div >
    )

}

export default CreditCard