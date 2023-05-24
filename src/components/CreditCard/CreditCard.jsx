import './CreditCard.css'
import Visa from '../../assets/images/visa.png'
import MasterCard from '../../assets/images/mastercardIcon.png'

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {

    const hiddenNumber = number.slice(-4)
    const shortYear = expirationYear.toString().slice(-2)

    let typeCard

    if (type === 'Visa') typeCard = Visa
    if (type === 'Master Card') typeCard = MasterCard

    return (

        <div className="cards" style={{ backgroundColor: bgColor }} >
            <img src={typeCard} alt="" className='cardIMG' />
            <p>···· ···· ···· {hiddenNumber}</p>
            <p>EXPIRES{expirationMonth}/{shortYear}   {bank}</p>
            <p>{owner}</p>
        </div>
    )
}

export default CreditCard