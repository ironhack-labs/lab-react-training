import './CreditCard.css';
import visaImg from '../../assets/images/visa.png';
import masterCardImg from '../../assets/images/master-card.svg';


const CreditCard = (props) => {
    // Handle CreditCard type
    let creditCard = '';

    if(props.type === 'Visa'){
        creditCard = visaImg;
    } else if(props.type === 'Master Card') {
        creditCard = masterCardImg;
    }

    return (
        <div className="credit-card" style={{backgroundColor: `${props.bgColor}`, color: `${props.color}`}}>
            <div className='credit-card-img'>
                <img src={creditCard} alt="" />
            </div>
            <div className='credit-card-number'>
                <p>•••• •••• •••• {props.number.slice(12)}</p>
            </div>
            <div className='credit-card-info'>
                <div className='credit-card-date-bank'>
                    <p>Expires {props.expirationMonth}/{props.expirationYear}</p>
                    <p>{props.bank}</p>
                </div>
                <div className='credit-card-name'>
                    <p>{props.owner}</p>
                </div>
            </div>
        </div>
    )
};

export default CreditCard;