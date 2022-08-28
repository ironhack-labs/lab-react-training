import "./CreditCard.css"
import visa from "../../assets/images/visa.png"
import master from "../../assets/images/mast.jpg"

function CreditCard({ 
  type, 
  number, 
  expirationMonth, 
  expirationYear,
  bank,
  owner,
  bgColor,
  color
}) {
  let img = ""
  if (type === "Visa") {
    img = visa
  } else {
    img = master
  }

  let month = {...expirationMonth}
  if (expirationMonth < 10) {
    month = ("0" + expirationMonth) 
  } else {
    month = expirationMonth
  }

  let year = expirationYear.toString().slice(-2)

  return(
    <div className="credit-card d-flex flex-column" style={{
      backgroundColor: `${bgColor}`,
      color: `${color}`
    }}>
      <img className="align-self-end m-4" src={img} alt={type} />
      <h1 className="align-self-center m-4">{number}</h1>
      <div className="ms-4">
        <div className="row">
          <h5 className="col-5">Expires: {month}/{year}</h5>
          <h5 className="col-7">{bank}</h5>
        </div>
        <h5 >{owner}</h5>
      </div>

    </div>
  )
}

export default CreditCard