
import Visa from "../../assets/images/visa.png"
import Mastercard from "../../assets/images/master-card.svg"

import './CreditCard.css'

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {

    let cardImage

    type === 'Visa' ? cardImage = Visa : cardImage = Mastercard

    let cardNumber = number.slice(-4)
    const backgroundColor = `${bgColor}`

    return (
        <>
            <div className="creditCard" style={{ backgroundColor, color }}>
                <div className="logo">
                    <img src={cardImage} alt="logo Visa or Mastercard" />
                </div>

                <div className="numbers">
                    <strong>**** **** **** </strong>
                    {cardNumber}
                </div>

                <div>
                    <p>Expires {expirationMonth}/{expirationYear}  {bank}</p>
                    <p>{owner}</p>
                </div>

            </div>
        </>
    )

}

export default CreditCard