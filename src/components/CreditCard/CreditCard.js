import './CreditCard.css'
import visa from '../../assets/images/visa.png'
import masterCard from  '../../assets/images/master-card.svg'

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {
    
    if (type === 'Visa'){
        type = visa
    } else {
        type = masterCard
    }

    const cardNumber = `**** **** **** ${number.slice(-4)}`
    const expirationDate = expirationYear.toString().slice(-2)
    const mounthFormat = expirationMonth.toString().split('')

    if (mounthFormat.length >= 2){
        expirationMonth = mounthFormat.join('')
    } else {
        expirationMonth = 0 + mounthFormat.join('')
    }

    return (
        <div className="credit-card" style= {{ backgroundColor: `${bgColor}` }}>
            <div className="credit-card-title" style={{ color: color }}>
                <div className='logo'>
                    <img src={type} alt='bank logo type'/>
                </div>
                <div className='card-number'>
                    <p>{cardNumber}</p>
                </div>
                <div className='info-card'>
                    <p>Expires {expirationMonth}/{expirationDate} <span>{bank}</span></p> 
                    <p>{owner}</p>
                </div>
            </div>
        </div>
    )
}

export default CreditCard