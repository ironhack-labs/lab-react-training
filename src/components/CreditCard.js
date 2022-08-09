import './CreditCard.css'

function CreditCard (props) {
    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props; 
    return (
        <div className='creditcard' style={{backgroundColor:`${bgColor}`, color:`${color}`}}>
            <p className='type'>{type}</p>
            <p className='number'> {number}</p>
            <p className='expiration'>Expires {expirationMonth}/{expirationYear}</p>
            <p className='bank'>{bank}</p>
            <p className='owner'>{owner}</p>
        </div>
    );
};
export default CreditCard;