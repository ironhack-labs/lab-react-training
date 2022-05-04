import visaLogo from '../assets/images/visa.png'
import mastercardLogo from '../assets/images/master-card.svg'

function CreditCard(props) {
    const cardStyle = {
        background: props.bgColor,
        color: props.color
    }
    const logoFile = props.type.toLowerCase().includes('master') ? mastercardLogo : visaLogo
    return (
        <div className="creditcard" style={cardStyle}>
            <p className="card-body">
                <img src={logoFile} className="card-type" alt={props.type} />
                <p className="card-number">
                {props.number.slice(-4)}<br />
                </p>
                <p className="card-details">
                    Expires <span className="card-expiration">{props.expirationMonth}/{props.expirationYear}</span>
                    &emsp; <span className="card-bank">{props.bank}</span>
                </p>
                <p className="card-details">
                    <span className="card-owner">{props.owner}</span>
                </p>
            </p>
        </div>
    )
  }  
   
  export default CreditCard;