import './CreditCard.css';
import visa from '../../assets/images/visa.png';
import master from '../../assets/images/master-card.webp';

function CreditCard({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) {
   
    const cardStyle = {
        backgroundColor: bgColor,
        color: color
    }

    const slicedNumber = number.slice(-4);
   
    return ( 
        <div className='CreditCard' style={ cardStyle }>
            <div className='credit-card-img'>
                <img 
                src={ type === 'Visa' ? visa : master } 
                alt='img'
                width="50px">   
                </img>
            </div>

            <div className='credit-card-content'>
                <p> ●●●● ●●●● ●●●● { slicedNumber }</p>
                <p>Expires: { expirationMonth }/{ expirationYear }</p>
                <p>{ bank }</p>
                <p>{ owner }</p>
            </div>
        </div> 
    );
}

export default CreditCard;