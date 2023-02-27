import CreditCardLogo from './CreditCardLogo/CreditCardLogo'
import CreditCardNumber from './CreditCardNumber/CreditCardNumber'
import CreditCardInfo from './CreditCardInfo/CreditCardInfo'
import './CreditCard.css'

function CreditCard({ creditCardData }) {

    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = creditCardData

    const style = {
        backgroundColor: bgColor,
        color: color
    }

    return (
        <div style={style} className="CreditCard">
            <CreditCardLogo type={type} />
            <CreditCardNumber number={number} />
            <CreditCardInfo creditCardInfo={{
                expirationMonth,
                expirationYear,
                bank,
                owner
            }} />
        </div>
    )
}

export default CreditCard