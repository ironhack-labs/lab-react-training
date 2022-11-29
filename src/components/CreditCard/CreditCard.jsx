import VisaImg from '../../assets/images/visa.png'
import MasterCardImg from '../../assets/images/mastercard.png'
import('./credit-card.css')


const CreditCard = (props) => {
    let cardType = {}
    let backgroundColor = { backgroundColor: `${props.bgColor}` }
    let color = { color: `${props.color}` }

    if (props.type === 'Visa') {
        cardType = VisaImg
    }
    if (props.type === 'Master Card') {
        cardType = MasterCardImg
    }

    let getLast4 = String(`${props.number}`).slice(-4)
    let last4Num = Number(getLast4)

    let expirationMonth = 0
    if (props.expirationMonth <= 9) {
        expirationMonth = '0' + props.expirationMonth
    } else {
        expirationMonth = props.expirationMonth
    }

    let getLast2 = String(`${props.expirationYear}`).slice(-2)
    let last2Num = Number(getLast2)

    return (
        <div className='credit-card col-4' style={{ ...backgroundColor, ...color }} >
            <img src={cardType} alt={props.type} />
            <p>**** **** **** <span>{last4Num}</span></p>
            <p>Expires {expirationMonth}/{last2Num} {props.bank}</p>
            <p>{props.owner}</p>
        </div>
    )
}

export default CreditCard