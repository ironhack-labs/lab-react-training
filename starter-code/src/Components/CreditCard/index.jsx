import React from 'react';

import './style.css';

function Change (str){
const arr = str.split("").splice(12)
const ans = [ "**** ","**** ", "**** "]
 ans.push(arr)
return ans
}

function CreditCard (data) {
    const number = Change(data.number)
    return (
      <div style={{backgroundColor: `${data.bgColor}`, height: "10em", width: "16em", borderRadius: "12px", color:`${data.color}`}} >
      <br></br>
      <p>{data.type} {data.bank}</p>
      <p>{data.owner}</p>
      <p>{number} M{data.expirationMonth} Y{data.expirationYear}</p>
      </div>
    )
}

export default CreditCard;

