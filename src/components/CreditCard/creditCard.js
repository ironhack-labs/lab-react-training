import visa from "../../assets/images/visa.png"
import master from "../../assets/images/master-card.png"
import  "./creditCard.css"

function CreditCard({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color, coded, fontS}){
  return(
    <div className="d-flex position-relative">
        <div id="inboxing" style={{backgroundColor:`${bgColor}`, color}} className="border border-dark m-1 d-block" >
            <div className="d-flex flex-row-reverse">
              <img src={type === "Visa" ? visa : master} width="13%" alt="no" className="m-2" />
            </div>       
              <h3 className="padding-image"><span style={{fontSize:`${fontS}`}}> {coded} </span> {number.toString().slice(-4)}</h3>
            <div className="padding-text">
                <h6 >Expires {expirationMonth.toString().padStart(2,0)}/{expirationYear.toString().slice(-2)} &nbsp;&nbsp;&nbsp;&nbsp;{bank}</h6> 
                <h6 >{owner}</h6> 
            </div>
        </div>
    </div>
    )
  }

export default CreditCard