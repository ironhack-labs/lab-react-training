import './../CreditCard/CreditCard.css'
import Visa from './../../assets/images/visa.png'
import MasterCard from './../../assets/images/master-card.svg'

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {

    let image = type == "Visa" ? Visa : MasterCard
    /* let bgColor = number == "0123456789016984" ? "#ddbb55" : undefined
    let color = number == "0123456789016984" ? "white" : undefined */

    return (
        <div className="card1">
            <p className='number'>{number}</p>
            <p>Exp: {expirationMonth} {expirationYear}</p>
            <p>{bank}</p>
            <p>{owner}</p>
            <img src={image} />
        </div>
    )

}


export default CreditCard