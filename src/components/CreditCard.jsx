import React from 'react'


function hideNumbers(number) {
  return number.slice(-4)
}

function expiresDate(year) {
  console.log(year);
  return year.toString().slice(-2)
}


const CreditCard = (props) => {
  const types = {
    Visa: "https://upload.wikimedia.org/wikipedia/commons/7/72/MasterCard_early_1990s_logo.png",
    "Master Card": "https://www.seekpng.com/png/detail/336-3364024_visa-logo-png-visa-money-bags-tanktop.png"
}
    return (
        <div className="CreditCard" style={{backgroundColor: props.bgColor, color: props.color }}>
              <img src={types[props.type]} alt=""/>
              <p>•••• •••• •••• {hideNumbers(props.number)}</p>
              <div>
              Expires {props.expirationMonth}/{expiresDate(props.expirationYear)}
              <span>{props.bank}</span>
              </div>
              <div>
                {props.owner}
              </div>
        </div>
 )
}

export default CreditCard