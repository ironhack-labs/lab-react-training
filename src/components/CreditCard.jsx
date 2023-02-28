import './CreditCard.css'
import visa from '../assets/images/visa.png'
import master from '../assets/images/mastercardIcon.png'

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {
    const lastNumber = number.slice(-4);

    const logoIm = () => {
        if (type === 'Visa') {
            return visa;
        } else if (type === 'Master Card') {
            return master;
        } else {
            return '';
        }
    }

    return (
        <div className="Card" style={{ backgroundColor: bgColor, color: color }}>
            <div className="logo">
                <img src={logoIm()} alt={type} />
            </div>
            <div className="number">
                <p>**** **** **** {lastNumber}</p>
            </div>
            <div className="info">
                <p>Expires {expirationMonth}/{expirationYear}</p>
                <p>{bank}</p>
                <p className='nameIm'>{owner}</p>
            </div>
        </div>
    );
}

export default CreditCard;

