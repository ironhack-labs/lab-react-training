import visa from "../../assets/images/visa.png"
import master from '../../assets/images/master-card.svg'
import './CreditCard.css'

export const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {
  number = number.slice(12)
  return (
    <div className="credit-card-div" style={{ backgroundColor: bgColor, color:color }} >
      <figure>
        <img src={type=== 'Visa'?visa:master} style={{ height: '30px' }}></img>
      </figure>
      <div className="number">
        •••• &nbsp; •••• &nbsp; •••• &nbsp; {number}
      </div>
      <div className="data">
        <p>Expires {expirationMonth}/{expirationYear} &nbsp; &nbsp;  {bank}</p>
        <p>{owner}</p>
      </div>


    </div>
  )

}