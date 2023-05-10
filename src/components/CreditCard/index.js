import "./index.css"
import visa from "../../assets/images/visa.png"
import masterCard  from "../../assets/images/mastercard.png"

export const CreditCard = ({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {
  
  const divStyle = {
    backgroundColor: bgColor,
    color: color,
    }
  
    const getFormatDate = (expirationMonth, expirationYear) => {
      
      expirationMonth = ("0" + (expirationMonth + 1)).slice(-2)
      expirationYear = expirationYear %100
      return `${expirationMonth}/${expirationYear}`
    }
    
  
  return (
    <div className="CreditCard" style={divStyle}>
      <div className="ImageType">
      {type === "Visa" ? 
        <img src={visa} alt="Visa" />
      : 
        <img src={masterCard} alt="MasterCard" /> }
      </div>
      <span className="Number"> •••• •••• •••• {number.slice(-4)}</span>
      <div className="Expiration">
       <span>Expires {getFormatDate(expirationMonth, expirationYear)}</span>
        <span>{bank}</span>
      </div>
      <div className="Owner">
      <span>{owner}</span>
      </div>
    </div>
  )
}
