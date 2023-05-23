import './CreditCard.css'
import visa from '../../assets/images/visa.png'
import mastercard from '../../assets/images/mastercardIcon.png'
const CreditCard = ({ creditCardInfo }) => {
    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = creditCardInfo
    let card = <img src="" alt="" />

    if (type === 'Visa') {
        card = <img src={visa} alt="" />
    }

    if (type === 'Master Card') {
        card = <img src={mastercard} alt="" />
    }


    return (
        <div className="CardContainer">
            <div className='cardLogo'>{card}</div>
            <p> **** **** **** {number.substr(-4)}</p>
            <p>Expires {expirationMonth}/{expirationYear}   {bank}</p>
            <p>{owner}</p>
        </div>


    )
}

export default CreditCard