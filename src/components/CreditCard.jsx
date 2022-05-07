import visa from '../assets/images/visa.png'
import master from '../assets/images/master-card.svg'

function CreditCard (props) {

    console.log(props)

    return (
        <div className="container">
            <div className="card" style={{backgroundColor : props.bgColor, color : props.color}}>
                {props.type === 'Visa'? <img src={visa} alt="visa" height={20}/> : <img src={master} alt="master" height={20}/> }
                <p style={{fontSize : 20}}>●●●●●●●●●●●●{props.number.slice(-4)}</p>
                <p>Expires {props.expirationMonth} / {props.expirationYear} {props.bank}</p>
                <p>{props.owner}</p>
            </div>
        </div>
    )

}

export default CreditCard