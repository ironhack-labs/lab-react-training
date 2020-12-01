import React from 'react';
import './CreditCard.css';

function CreditCard(props){
 const {type, number, expirationMonth,expirationYear,bank,owner,bgColor,color} = props;

 let cardNumber = number.slice(-4);
 let countNum = '';
for(let i = (number.length)-4; i>0; i--){
 countNum += '•';
}

 let style = {
     color:color,
     backgroundColor:bgColor,
 }
 let imgUrl =""
if (type === 'Visa'){
    imgUrl = 'img/visa.png'
} else {
    imgUrl = 'img/master-card.svg'
}
    return (
        <div className="CreditCart" style={style}>
         <img src={imgUrl} alt="card Logo"></img>
        <p>{countNum+cardNumber}</p>
        <p>Expires {expirationMonth}/{expirationYear}</p>
        <p>{bank}</p> 
        <p>{owner}</p>
        </div>
    );
}

export default CreditCard;