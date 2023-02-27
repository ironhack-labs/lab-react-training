import Visa from './../../../assets/images/visa.png'
import MasterCard from './../../../assets/images/mastercard-logo.png'
import './CreditCardLogo.css'

function CreditCardLogo({ type }) {
    let imageSrc

    type === "Visa" ? imageSrc = Visa : imageSrc = MasterCard

    return (
        <div className='CreditCardLogo'>
            <img src={imageSrc} alt={type} />
        </div>
    )
}

export default CreditCardLogo