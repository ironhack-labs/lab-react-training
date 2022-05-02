import './CreditCard.css'
import Visa from '../assets/images/visa.png'
import MasterCard from '../assets/images/mastercard.png'

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {


    let logo

    const backgroundColor = `${bgColor}`

    if (type === 'Visa') { logo = Visa }
    else if (type === 'Master Card') { logo = MasterCard }
    let dot = '•••• •••• •••• '
    let numberHiden = number.substr(9, 4)

    return (

        <div className="creditCard" style={{ backgroundColor, color }}>
            <img src={logo} alt={type} />

            <h3><span>{dot}</span>{numberHiden}</h3>
            <p>{expirationMonth} {expirationYear} {bank}</p>
            <p>{owner}</p>

        </div>
    )

}


export default CreditCard
