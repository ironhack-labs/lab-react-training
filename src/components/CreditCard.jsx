
import Visa from '../assets/images/visa.png'
import MasterCard from '../assets/images/master-card.svg'
import "./CreditCard.css"


function CreditCard({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) {
  return (
   
      <div className='creditCard' style={{backgroundColor: `${bgColor}`, color:`${color}`}}>
            {type === 'Visa' && <img className='cardLogo' src={Visa} alt='logoVisa'/>}
            {type === 'Master Card' && <img className='cardLogo' src={MasterCard} alt='logoMC'/>}

          <p className='cardNumber'>**** **** **** {number.slice(-4)}</p>
          <div>
              <div className="bankAndExpiration">
                  <p>Expires {expirationMonth}/{expirationYear}</p>
                  <p>{bank}</p>
              </div>
          </div>
          <p className='owner'>{owner}</p>
      </div>

  )
}

export default CreditCard

