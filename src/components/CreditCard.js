import React from 'react';

const CreditCard = ({type, number, expirationMonth, expirationYear, bank, owner, bgcolor, color}) =>{
    return(
        <div>
            <p>{type}</p>
            <p>{number}</p>
            <p>{expirationMonth}/{expirationYear}</p>
            <p>{bank}</p>
            <p>{owner}</p>           
        </div>
    )
}
export default CreditCard;

// type: A string that can be "Visa" or "Master Card"
// number: A string that is the number of the credit card. For security reasons, you should only display the 4 last digits 😉
// expirationMonth: A number that represents the month, between 1 and 12
// expirationYear: A number that represents the year
// bank: A string that represents the name of the bank
// owner: A string that represents the name of the owner
// bgColor: A string for the background color of the card
// color: A string for the text color of the card