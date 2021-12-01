import './CreditCard.css'
import Visa from './images/visa.png' ;
import MasterCard from './images/master-card.svg';

const CreditCard = (props)=>{
    const {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = props
    
   
    return(
        <div className= "containerCard">
            <div className="CreditCard" style={{backgroundColor: bgColor, color: color}}>
                <p className="logoCard">{type === "Visa" ? (
                    <img src={Visa} alt="Visa" /> ) : (<img src={MasterCard} alt="MasterCard" />)}</p>
                <p className= "Number">•••• •••• •••• {number.substr(-4)}</p>
                <div className="textCard">
                <p>Expires {expirationMonth}/{expirationYear.toString().substr(-2)}   {bank}</p>
                <p>{owner}</p>
                </div>
            </div>
        </div>
    )
}

export default CreditCard