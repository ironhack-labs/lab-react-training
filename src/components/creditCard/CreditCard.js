
import './CreditCard.css'
function CreditCard (props) {
    const cardType = {
        Visa: '/img/visa.png',
        'Master Card': '/img/master-card.svg'
        
    }
    return (
        <div className="card ms-5 mt-2" style={{height: '200px', width: '350px', backgroundColor: `${props.bgColor}`, color: props.color}}>
             <div className="d-flex justify-content-end">
                 <img className="imgCard" src={cardType[props.type]} alt="description"></img>
            </div>
            <p> ···· ···· ····{props.number.slice(-4)}</p>
            <p> Expires {props.expirationMonth}/{props.expirationYear} {props.bank}</p>
            <p>{props.owner}</p>
        </div>
    )
}
export default CreditCard