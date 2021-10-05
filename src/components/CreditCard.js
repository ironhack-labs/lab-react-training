import React from 'react'

function CreditCard({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) {
    const divStyle = {
        color: `${color}`,
        background: `${bgColor}`
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
      var numeroEscondido = cardHide(number)
  

    return (
        <div>
            <div style={divStyle}>
                    <p> {type}</p> 
                    <p> {numeroEscondido}</p> 
                <div>
                    <p> {expirationMonth.toString()}</p> 
                    <p> {expirationYear.toString()}</p> 
                    <p> {bank}</p> 
                </div>
                <p> {owner}</p> 
                {/* <div>
                    <p>bgColor {bgColor}</p> 
                    <p>color {color}</p> 
                </div> */}
            </div>
        </div>
    )
}

export default CreditCard
