import './CreditCard.css'
import visa from '../../assets/images/visa.png'
import mastercard from '../../assets/images/mastercardIcon.png'


const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {

    const style = { backgroundColor: `${bgColor}`, color: `${color}` }

    let card

    if (type === "Master Card") {

        card = visa

    }
    else if (type === "Visa") {
        card = mastercard

    }


    return (
        <div className="CreditCard" style={style}>
            <div className='card'>
                <img src={card} alt={type} />
            </div>

            <div className='number'>
                <p>{number}</p>
            </div>

            <div className='expiration'>
                <p>{expirationYear} / {expirationMonth}</p>
            </div>

            <div className='bank'>
                <p>{bank}</p>
            </div>

            <div className='owner'>
                <p>{owner}</p>
            </div>

        </div>
    );
}

export default CreditCard;
