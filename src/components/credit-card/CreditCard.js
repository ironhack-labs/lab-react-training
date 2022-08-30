import visa from '../../assets/images/visa.png'
import mastercard from '../../assets/images/martercad-logo.png'

function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) {
  let card = "";
  if (type === "Visa") {
    card = visa
  } else {
    card = mastercard
  }


  return(
    <div className="d-flex flex-column">
      <img src={card} alt={type} />
    </div>
  )



}

export default CreditCard;