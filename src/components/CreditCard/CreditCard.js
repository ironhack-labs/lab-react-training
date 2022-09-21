import "./CreditCard.css"
import visa from '../../assets/images/visa.png';
import master from '../../assets/images/mastercard.png';


function CreditCard({type, number, expirationMonth, expirationYear, bank , owner, bgColor, color}) {
    const imgUrl = type === 'Visa' ? visa : master;
    const onlyFour = number.toString().slice(-4);
    const month = expirationMonth.toString().length === 2 ? expirationMonth : '0' + expirationMonth.toString();
    const year = expirationYear.toString().slice(-2);

    return(
        <div className="creditcard-container" style={{ backgroundColor: bgColor, color }}>
            <div className="logo">
                <img src={imgUrl} alt={type} /> 
            </div>
            <div className="number">
                <p>{'**** '.repeat(3)}{onlyFour}</p>
            </div>
            <div className="expires">
                <p>Expires {month}/{year}</p>
                <p>{bank}</p>
            </div>
            <div className="name">
                <p>{owner}</p>
            </div>
        </div>
)
}

export default CreditCard;


