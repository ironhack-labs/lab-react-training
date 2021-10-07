import React from 'react'

function CreditCard({type,number,expirationMonth,expirationYear,bank,owner,bgColor,color}) {
    const divStyle = {
        color: `${color}`,
        backgroundColor: `${bgColor}`
      };
    function cardHide(card) {
        let hideNum = [];
          for(let i = 0; i < card.length; i++){
          if(i < card.length-4){
            hideNum.push("*");
          }else{
            hideNum.push(card[i]);
          }
        }
        return hideNum.join("");
      }
      let numeroEscondido = cardHide(number)
    return (
        <div>
        <div style= {divStyle} >
            <p>Type:{type}</p>
            <p>{numeroEscondido}</p>
            <p>Expiration Month:{expirationMonth.toString()}</p> <p>Expiration Year:{expirationYear.toString()}</p>
            <p>{bank}</p>
            <p>{owner}</p>
            </div>
        </div>
    )
}

export default CreditCard

