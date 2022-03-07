import visa from "../assets/images/visa.png"
import master from "../assets/images/master-card.svg"
import "./Component.css"


function CreditCard(props) {
  let cardFlag
   
  if (props.type === "Visa") {
       cardFlag = visa
   }
   if (props.type === "Master Card") {
       cardFlag = master
   }

   let lastDigitsCard = props.number.substring(props.number.length -4)
   let year = props.expirationYear.toString()
   let lastDigitsYear = year.substring(year.length -2)
//    let numberDots = props.number.substring(0, props.number.length -4)

//    let dotSymbol = `<span className="dot" style={{backgroundColor: ${props.color}}}></span>`

   let numberArr = lastDigitsCard.split('')

   
    return (
       <div className="creditCard" style={{color: `${props.color}`, backgroundColor: `${props.bgColor}` }}>
            <div className="imgContainer">
                <img className = "imgCard" src= {cardFlag} alt={props.type}/>
            </div>
            <div className="cardNumber">
                <div className="containerDot">
                    {numberArr.map((currentNumber) => {
                        return <span className="dot" style={{backgroundColor: `${props.color}`}}></span>
                    })}
                </div>
                <div className="containerDot">
                    {numberArr.map((currentNumber) => {
                        return <span className="dot" style={{backgroundColor: `${props.color}`}}></span>
                    })}
                </div>
                <div className="containerDot">
                    {numberArr.map((currentNumber) => {
                        return <span className="dot" style={{backgroundColor: `${props.color}`}}></span>
                    })}
                </div>                 
                <h1>{lastDigitsCard}</h1>
            </div>
                
            <div>
                <div className = "cardInfo">
                    <p>Expires {props.expirationMonth.toString().padStart(2, '0')}/{lastDigitsYear}</p>
                    <p>{props.bank}</p>
            </div>
            <p>{props.owner}</p>
            </div>

       </div>
       
       )
        
 
}

export default CreditCard;