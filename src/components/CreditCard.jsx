import React from 'react';

const CreditCard = ({type, number, expirationMonth, expirationYear, bank, owner,bgcolor,color})=>{
    return (
     <div>  
        <p>{type} </p>
        <p>{number} </p>
        <p>{expirationMonth}/{expirationYear}</p>
        <p>{bank} </p>
        <p>{owner} </p>
     </div>
    )
}

export default CreditCard