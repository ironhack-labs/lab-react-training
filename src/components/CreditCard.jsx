import visa from '../assets/images/visa.png' 
import master from '../assets/images/master-card.png' 
import './CreditCard.css'

function CreditCard({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}){

    function filterType(type){
        if(type === 'Visa'){
            return visa
        } else if ( type === 'Master Card'){
            return master
        } else return null
    }

    return (
        <div className='creditCard' style={{backgroundColor: bgColor}}>
            <div>
                <img className='logo' src={filterType(type)}></img>
            </div>
            
            <div className='number' style={{color: `${color}`}}>
                <span>**** **** **** </span><span>{number.split('').splice(12,4)}</span>
            </div>

            <div className='data' style={{color: `${color}`}}>
                <p>Expiration: {expirationMonth}/{expirationYear}  {bank}</p>
                <p>{owner}</p>
            </div>
        </div>
    )
}

export default CreditCard