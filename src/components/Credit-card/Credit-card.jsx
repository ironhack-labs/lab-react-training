import './Credit-card.css'
import visa from '../../assets/images/visa.png'
import masterCard from '../../assets/images/mastercard-logo.png'

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {
    const cardStyle = { backgroundColor: bgColor, color: color };

    const lastFourDigits = number.slice(-4);
    const hiddenDigits = number.slice(0, -4).replace(/\d/g, '*');
    const maskedNumber = hiddenDigits + lastFourDigits;
    const style = { backgroundColor: bgColor, color };

    return (

        <div class='rounded-box' >
            <div style={style}>
                {type === 'Visa' ? (<img class='caja' src={visa} alt="Visa" />) : (<img class='caja' src={masterCard} alt="MasterCard" />)}
                <h3 class='text'>{maskedNumber}</h3>
                <p class='text'>Expires: {expirationMonth}/{expirationYear}   {bank}</p>

                <div class='text'>{owner}</div>
            </div>
        </div>

    )
}
export default CreditCard;




