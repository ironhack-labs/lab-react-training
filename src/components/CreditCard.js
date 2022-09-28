import Visa from '../assets/images/visa.png'
import Mastercard from '../assets/images/mastercard.png'

const CreditCard = (props) => {
    const divStyle = {
        backgroundColor: `${props.bgColor}`,
        color: `${props.color}`
    }
    return(
        <section className="singleCard" style={divStyle}>
            <div className='cardRight'>
                <img className="cardImage"src={props.type === 'Visa' ? Visa : Mastercard} alt='card' />
                <div className='cardNumber'>**** **** **** {props.number.slice(12,16)}</div>
            </div>
            <div className='cardBottom'>
            <div className='expAndBank'>
            <div>Expires {props.expirationMonth.toString().length < 2 ? `0${props.expirationMonth}`
             : props.expirationMonth}/{props.expirationYear.toString().slice(2,4)}</div>
             <div></div>
            <div className='bank'>{props.bank}</div>
            </div>
            <div>{props.owner}</div>
            </div>
        </section>
    )
}

export default CreditCard