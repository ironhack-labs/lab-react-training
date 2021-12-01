import React from 'react';

const CreditCard =(props)=>{
    const {type, number, expirationMonth, expirationYear, bank,
             owner, bgColor, color} = props
    
    
        const properties= {backgroundColor: bgColor, color: color}
    
    return (
       
       <div style={properties}>
           <p>{type}</p>
           <p>.... .... .... {number.slice(-4)}</p>
           <p>Expires: {expirationMonth}/{expirationYear}{bank}</p>
           <p>{owner}</p>
           

       </div>
    
      
    )
    }
    
    export default CreditCard;