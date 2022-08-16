
import visa from "../../assets/images/visa.png"


function CreditCard(props) {

  const {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = props  
  
  const divStyle = {
    backgroundColor : bgColor,
    color : color
  }

  

  const checkCard = (type) => {
    if (type === 'Visa') {
        
        return <img src={visa} alt="" className='card-type'/>
    }

    else {
        return <p>mastercard</p>
    }
    }

    const lastNumbers = (number) => {
        let splitNumber = number.split("");
        splitNumber.splice(0,12)
        return splitNumber
    }

  
  return (
    <div style={divStyle} className="credit-card" >
        <div>
           {checkCard(type)}
        </div>
        <div className='credit-card-number'>
           <li></li> <li></li> <li></li> <li></li> 
           <li></li> <li></li> <li></li> <li></li> 
           <li></li> <li></li> <li></li> <li></li> 
           {lastNumbers(number)}
        </div>
        
        <div>
            <p> Expires {expirationMonth}/{expirationYear}</p>
            <p> {bank}</p>
        </div>
        <div>
            <p>{owner}</p>
        </div>
        
    </div>
  )
}

export default CreditCard