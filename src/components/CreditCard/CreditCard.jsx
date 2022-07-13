import './CreditCard.css'

import visa from './../../assets/images/visa.png'
import masterCard from './../../assets/images/master-card.svg'

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {
    let bgCard
    type === 'Visa' ? bgCard = visa : bgCard = masterCard
    const backgroundColor = bgColor
    let creditNum = number.slice(-4) 

    return (
        <div className='creditCard' style={{ backgroundColor, color }}>
            <img className='logo' alt='logo' src={bgCard}/>
            <h2>**** **** **** {creditNum}</h2>
            <div className='owner'>
                <p> Expires {expirationMonth}/{expirationYear}</p>
                <p> {bank}</p>
            </div>
            <div>
                <h5>{owner}</h5>
            </div>
        </div>
      
        
    )

}


export default CreditCard