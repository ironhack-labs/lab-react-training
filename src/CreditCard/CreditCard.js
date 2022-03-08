import './CreditCard.css'
import visa from '../assets/images/visa.png'
import mastercard from '../assets/images/master-card.svg';

function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {

    function cardLog(type) {
        switch (type) {
            case 'Visa':
                return visa;
            case 'Master Card':
                return mastercard;
            default:
                break;
        }

    }

    return (
        <div
            className="cards"
            style={{ backgroundColor: `${bgColor}`, color: `${color}` }}
        >
            <div className="logo-position">
                <img className="logo" src={cardLog(type)} alt="logo"></img>
            </div>
            <div>
                <p className="number"> •••• •••• •••• {number.substring(12, number)}</p>
            </div>
            <div className="date-bank">
                <p>
                    expires {expirationMonth}/{expirationYear}
                </p>
                <p className="bank"> {bank}</p>
            </div>
            <div>
                <p className="owner">{owner}</p>
            </div>
        </div>
    );

}
export default CreditCard;