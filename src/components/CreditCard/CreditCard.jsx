import './CreditCard.css'
import visa from './../../assets/images/visaIcon.png'
import masterCard from './../../assets/images/mastercardIcon.png'


const CreditCard = (props) => {

    const {
        type, number, expirationMonth, expirationYear, bank, owner, bgColor, color, picture
    } = props

    let style = {
        backgroundColor: `${bgColor}`,
        color: `${color}`
    }
    let logo
    if (type === 'Visa') { logo = visa }
    else { logo = masterCard }

    return (<div className="cards">
        <div className="creditCard" style={style}>
            <div ><img className="logo" src={logo}></img></div>
            <div className='info'>
                <p>************ {number.slice(-4)}</p>
                <p>Expires {expirationMonth}/{expirationYear} {bank}</p>
                <p>{owner}</p>
            </div>
        </div>
    </div>
    )
}

export default CreditCard
