import './CreditCard.css'
import VisaImg from '../../assets/images/visa.png'
import MasterCardImg from '../../assets/images/master-card.svg'

const CreditCard = props => {

    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props

    const divStyle = {
        backgroundColor: `${bgColor}`,
        color: `${color}`
    }

    let imgSrc = ''

    if (type === 'Master Card') {
        imgSrc = MasterCardImg
    } else if (type === 'Visa') {
        imgSrc = VisaImg
    }

    return (
        <div className="credit" style={divStyle}>
            <img className="img-credit" src={imgSrc} alt={type}></img>
            <p>{type}</p>
            <p>{number}</p>
            <p>{expirationMonth}/{expirationYear}</p>
            <p>{bank}</p>
            <p>{owner}</p>
        </div>
    )

}

export default CreditCard