import master from '../assets/images/master-card.svg';
import visa from '../assets/images/visa.png';

// Iteration 5 | Component: CreditCard
function CreditCard(props) {
    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props

    return (
            <div className='credit-card' style={{ backgroundColor: bgColor, color: color }}>
                <div className='credit-card-logo'>
                    {type === 'Visa' ?
                        <img src={visa} alt="Visa logo" style={{ width: '40px' }} />
                        : <img src={master} alt="Master Card logo" style={{ width: '40px' }} />
                    }
                </div>
                <div  className="credit-card-number">
                    <span>**** **** **** {number.slice(-4)}</span>
                </div>
                <div className='credit-card-info'>
                    <span>Expires {expirationMonth}/{expirationYear}</span>
                    <span className='bank-name'>{bank}</span>
                    <div>{owner}</div>
                </div>
            </div>
    );
}

export default CreditCard;
