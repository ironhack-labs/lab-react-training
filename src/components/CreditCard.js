import './CreditCard.css'
import visaImg from '../assets/images/visa.png'
import mastercard from '../assets/images/mastercard.svg'

function CreditCard (props) {
    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props; 
    const cardNumbers = `${number}`.slice(-4)
    let hideNumbers = `${cardNumbers}`.padStart(`${number}`.length, '\u25CF').match(/.{1,4}/g);

    return (
        <div className='creditcard' style={{backgroundColor:`${bgColor}`, color:`${color}`}}>
            <p className='type'>{type === "Visa" ? <img src={visaImg} alt='visa'/> : <img src={mastercard} alt='master' />} </p>
            <h2 className='number'>{hideNumbers.join(" ")}</h2>
            <p className='expiration'>Expires {expirationMonth}/{expirationYear} <span className='bank'>{bank}</span></p>
            <p className='owner'>{owner}</p>
        </div>
    );
};
export default CreditCard;