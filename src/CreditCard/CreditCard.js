import './CreditCard.css'
import visa from '../assets/images/visa.png'
import mastercard from '../assets/images/master-card.svg'

function CreditCard (props){

    let { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props

    let img = ''


    return (
    
        <div className="cardBox">
            {type === "Visa" ? <img className="minilogo" src={visa} alt="Visa" /> : <img className="minilogo" src={mastercard} alt="mastercard" />}
        
        <h4 type="password">· · · · · · · · · 3123</h4>
        <p>Expires {expirationMonth},{expirationYear}   {bank}</p>
        <p>{owner}</p>
        </div>
    
    )
}




export default CreditCard