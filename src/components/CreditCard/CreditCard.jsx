
import CreditCardCompany from "../CreditCardCompany/CreditCardCompany";
import CreditCardInfo from "../CreditCardInfo/CreditCardInfo";
import CreditCardNumber from "../CreditCardNumber/CreditCardNumber";
import "./CreditCard.css"
function CreditCard({ cardInfo }) {
    const {
        type,
        number,
        expirationMonth,
        expirationYear,
        bank,
        owner,
        bgColor,
        color,
    } = cardInfo
    const cardStyle = {
        backgroundColor: bgColor,
        color
    }
    return (
        <div className="CreditCardContainer" style={cardStyle}>
            <CreditCardCompany type={type} />
            <CreditCardNumber number={number} />
            <CreditCardInfo cardInfo={{
                expirationMonth,
                expirationYear,
                bank,
                owner,
            }} />
        </div>

    );
}

export default CreditCard;