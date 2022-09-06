import './CreditCard.css'
import visa from '../assets/images/visa.png'
import mastercard from '../assets/images/mastercard.png'


const CreditCard = (props) => {

  const encryptNumber = (number) => {
    let encrypt = '**** **** **** ' + number.slice(-4);
    return encrypt
  }

  return (
    <div id="container-card" style={{ fontSize: '2rem', backgroundColor: `${props.bgColor}`, color: `${props.color}` }}>

      <div className="bandeira-card">
        <img alt="logo" src={props.type == 'Visa' ? visa : mastercard}></img>
      </div>
      
        <div className="item-cardCenter">
          <p style={{ margin: 0 }}>{encryptNumber(props.number)}</p>
        </div>

      <div className="item-card">
        <p>Experies {props.expirationMonth}/{props.expirationYear}   {props.bank}</p>
      </div>

      <div className="item-card">
        <p>{props.owner}</p>
      </div>
    </div>)
}

export default CreditCard