import './CreditCard.css'
import Visa from '../../assets/images/visa.png'
import MasterCard from '../../assets/images/master-card.png'

function CreditCard(props) {
   const {type, number, expirationMonth,expirationYear, bank, owner, bgColor, color} = props

    let lastFour = number.slice(-4)
    let logo = undefined
    let logoClass = ""

    if(type === "MasterCard") {
        logo = MasterCard
        logoClass = "masterCard"
    }
    if(type === "Visa") {
        logo = Visa
        logoClass = "visa"
    }

    return(
        <div className='creditCard__container' style={{backgroundColor: bgColor}}>
            <img src={logo} className={`creditCard__image--${logoClass}`}></img>
            <div className='creditCard__container--number'>
                <div className='creditCard__container--dot'>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
                <div className='creditCard__container--dot'>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
                <div className='creditCard__container--dot'>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
                <p>
                {lastFour}
                </p>
            </div>
            <div className='creditCard__container--downSection'>
                <div className='creditCard__container--owner'>
                    <p>Expires {expirationMonth}/{expirationYear}</p>
                    <p>{owner}</p>
                    </div>
                <p>{bank}</p>
            </div>
        </div>
    )
}

export default CreditCard;