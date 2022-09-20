import masterCard from '../../assets/images/master-card.png'
import visa from '../../assets/images/visa.png'
import './CreditCard.css'

const CreditCard = (props) => {
    const CardStyle = {
        backgroundColor: `${props.bgColor}`,
        color: `${props.color}`
    }

    let month
    if (props.expirationMonth.toString().length === 1) {
        month = '0' + props.expirationMonth.toString()
    } else {
        month = props.expirationMonth.toString()
    }


    return (
        <div className="creditCard col-3" style={CardStyle}>
            {props.type === 'Visa' ? <img src={visa} className="cardImg" /> : <img src={masterCard} className="cardImg" />}
            <p>**** **** **** {String(props.number).slice(-4)}</p>
            <span>Expires: {month}/{props.expirationYear} {props.bank}</span>
            <p>{props.owner}</p>
        </div>
    )

}

export default CreditCard