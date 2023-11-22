const VISA_IMG = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1920px-Visa_Inc._logo.svg.png"
const MASTERCARD_IMG = "https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"

import "./credit-card.css"

function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {

  return (
    <div className="credit-card" style={{ backgroundColor: bgColor, color}}>
      <img className="credit-card-logo" src={type==='Visa' ? VISA_IMG : MASTERCARD_IMG}  />
      <p className="credit-card-num">**** **** **** {number.slice(-4)}</p>
      <p className="credit-card-expire">{expirationMonth} / {expirationYear}</p>
      {" "}
      <p className="credit-card-name">{owner}</p>
    </div>

  )

}

export default CreditCard;