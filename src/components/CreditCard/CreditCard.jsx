import './CreditCard.css'
import visa from "../../assets/images/visa.png"
import masterCard from "../../assets/images/master-card.png"

function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {

  let imgHead = ""
  if (type === "Visa") {
    imgHead = visa
  } else {
    imgHead = masterCard
  }

  let monthCard = ""
  if (expirationMonth < 10) {
    monthCard = `0${expirationMonth}`
  } else {
    monthCard = expirationMonth
  }

  let numCard = number.slice(-4)
  let yearCard = expirationYear.toString().slice(-2)
  
  return (
    <div className='container-credit-card' style={{ backgroundColor: `${bgColor}`, color: `${color}` }}>
      <div className='container-credit-card-head'>
        <img src={imgHead} alt="creditCard" style={{ height: '50px' }} />
      </div>
      <div className='container-credit-middle'>
        <i class="fa fa-circle me-1"></i>
        <i class="fa fa-circle me-1"></i>
        <i class="fa fa-circle me-1"></i>
        <i class="fa fa-circle me-3"></i>
        <i class="fa fa-circle me-1"></i>
        <i class="fa fa-circle me-1"></i>
        <i class="fa fa-circle me-1"></i>
        <i class="fa fa-circle me-3"></i>
        <i class="fa fa-circle me-1"></i>
        <i class="fa fa-circle me-1"></i>
        <i class="fa fa-circle me-1"></i>
        <i class="fa fa-circle me-3"></i>
        <h1>{numCard}</h1>
      </div>
      <div className='container-credit-footer'>
        <div className='container-credit-footer-top'>
          <div className='me-4'>
            <h6>Expires: {monthCard}/{yearCard}</h6>
          </div>
          <div>
            <h6>{bank}</h6>
          </div>
        </div>
        <div className='container-credit-footer-down'>
          <h6>{owner}</h6>
        </div>
      </div>

    </div>
  )
}

export default CreditCard