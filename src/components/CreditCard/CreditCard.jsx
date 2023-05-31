import React from 'react';
import './CreditCard.css';

function CreditCard( type, number,ExperationMonth,ExperationYear,bank,owner,bgColor,color) {
    return (
        <div>
            <p>Type:{type} </p>
            <p> Number:{ Number}</p>
            <p> ExperationMonth:{ ExperationMonth}</p>
            <p> ExperationYear:{ ExperationYear}</p>
            <p> Bank:{ bank} </p>
            <p> Owner:{owner}</p>
            <p>bgColor:{bgColor}</p>
            <p>color:{ color}</p>
        </div>
    )
    
}
export default CreditCard;


// type
// number
// expirationMonth
// expirationYear
// bank
// owner
// bgColor
// color