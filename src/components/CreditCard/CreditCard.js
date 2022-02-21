import './CreditCard.css';
import visaLogo from '../../assets/images/visa.png'
import MasterCardLogo from '../../assets/images/master-card.svg'

const CreditCard = ({
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
}) => {

    const divStyle = {
        color,
        backgroundColor: `${bgColor}`
    }

    const cardLogo = type === 'Visa' ? visaLogo : MasterCardLogo;
    const lastNumbers = number.substr(12, 4);

    return (
        <div className="creditCard" style={divStyle}>
            <div className="img-container">
                <img src={cardLogo} alt=""/>
            </div>
            <div className="card-numbers">
                **** **** **** {lastNumbers}
            </div>
            <div>
                Expires {expirationMonth}/{expirationYear}    {bank}
            </div>
            <div>
                {owner}
            </div>
        </div>
    )
}
 
export default CreditCard;