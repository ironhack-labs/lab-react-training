import './CreditCard.css'
import visa from './../../assets/images/visa.png'
import mastercard from './../../assets/images/Mastercard.png'

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {
    let image

    if (type === 'Visa') { image = visa }
    else if (type === 'Master Card') { image = mastercard }

    const divStyle = {
        backgroundColor: `${bgColor}`,
        color: `${color}`
    }

    return (
        <div className='CreditCard' style={divStyle}>
            <img src="{image}" alt="{type}" />
            <p>{number}</p>
            <p>{expirationMonth}</p>
            <p>{expirationYear}</p>
            <p>{bank}</p>
            <p>{owner}</p>
        </div>
    )
}
export default CreditCard