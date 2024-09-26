import './CreditCard.css'
import Visa from '../../assets/images/visa.png'
import MasterCard from '../../assets/images/mastercardIcon.png'

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {
    let logo
    if (type === "Visa") {
        logo = Visa
    }
    if (type === "Master Card") {
        logo = MasterCard
    }
    return (<>
        <div style={{ backgroundColor: bgColor }} className="creditCard">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="nums">
                {number}
                {expirationMonth}
                {expirationYear}
            </div>
            <div className="info">
                <div className="infocard">
                    {bank}
                    {owner}
                </div>
            </div>

        </div>





    </>
    )
}
export default CreditCard