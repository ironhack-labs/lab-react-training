import React from 'react';


function CreditCard(props) {
    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props;  
    const randomNumber = number.slice(-4);
      return(
        <div>
<p>{type}</p>
<p>{randomNumber}</p>
<p>{expirationMonth}</p>
<p>{expirationYear}</p>
<p>{bank}</p>
<p>{owner}</p>
<div style={{ backgroundColor: `${bgColor}`, color: `${color}`}}></div>
<p>{color}</p>

</div>
      )
       }; 
        
export default CreditCard;

