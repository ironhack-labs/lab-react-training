import './CreditCard.css'
import Visa from '../../assets/images/visa.png'
import MC from '../../assets/images/mastercardIcon.png'

const CreditCard = (creditCardData) => {

    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = creditCardData

    let logo
    if (type === "Visa") {
        logo = Visa
    }
    if (type === "Master Card") {
        logo = MC
    }


    return (
        <div className="creditCardFlex">
            <div className="creditCard" style={{ background: bgColor, color: color }}>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="nums">
                    <p>{number}</p>
                </div>
                <div className="info">
                    <div className="info1">
                        <p>Expires: {expirationMonth}/{expirationYear}</p>
                        <p>{bank}</p>
                    </div>
                    <div className="info2">
                        <p>{owner}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CreditCard








