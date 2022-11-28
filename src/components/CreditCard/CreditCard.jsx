import './CreditCard.css'
import masterLogo from './../../assets/images/master-card.svg'
import visaLogo from './../../assets/images/visa.png'

const CreditCard = (props) => {

    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props
    
    let logo = type === 'Master Card' ? masterLogo : visaLogo
    let myNumber = number.slice(12, 16)
    let month = expirationMonth > 10 ? `${expirationMonth}` : `0${expirationMonth}`
    let year = expirationYear.toString().slice(2,4)
   
    return (
        
        <div className='creditCard' style={{ backgroundColor: `${bgColor}` }}>
            
            <div className='type'>
                <img src={logo}></img>
            </div>

            <div className='cardNumbers' style={{ color: `${color}` }}>
                <h2>•••• •••• •••• { myNumber }</h2>
            </div>

            <div className='cardInfo' style={{ color: `${color}` }}>
                <div>
                    <p>Expires {month}/{year}</p>
                    <p>{owner}</p>
                </div>
                <div>
                    <p>{bank}</p>
                </div>
            </div>
        </div>
    )
}

export default CreditCard