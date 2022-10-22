import Visa from '../assets/images/visa.png';
import Mastercard from '../assets/images/mastercard.png';

function CreditCard(props) {
    return(
        <div>
            <img src={ (props.type === 'Visa') ? Visa : Mastercard} alt="Card Type" />
            <p>{props.number}</p>
            <p>Expires {props.expirationMonth}/{props.expirationYear} {props.bank}</p>
            <p>{props.owner}</p>
        </div>


        
    );
};


export default CreditCard;
