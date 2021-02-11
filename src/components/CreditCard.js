import React from 'react';
import './img/master-card.svg';
import './img/visa.png';
import './CreditCard.css';


function CreditCard(props) {
    let style = {
        backgroundColor: `#${props.bgColor}`,
        color: `#${props.textColor}`
    };
    return (
        <div className='cards'>
            <div className="credit-card" style={style} backgroundColor={props.bgColor}>
                <p type={"Visa" || "MasterCard"}>{props.type}</p>
                <p>{'**** **** **** ' + props.number.slice(12,16)}</p>
                <p>Expires: {props.expirationMonth < 10 ? '0' + props.expirationMonth.toString() : props.expirationMonth.toString()}/{props.expirationYear.toString().slice(2,4)}</p>
                <p>{props.bankName}</p>  
                <p>{props.owner}</p>       
            </div>
        </div>
    )
}

// function CreditCard({type, number, bank, owner, bgColor, expirationMonth, expirationYear}) {
// const lastFourDigits = number.substr(-4, 4)
// const hashNumbers = '*'.repeat(12);
// return (
//     <div>
//         <img src ={imagesUrls(type)} alt= "visa or mastercard"/>
//         <h2>{`${hashNumbers} ${lastFourDigits}`}</h2>
//         <p>{formatNumber}</p>
//     </div>
// )
// }
// const formatNumber = number => `0${number}`.substr(-2)
// const imagesUrls = (type) => {
//     const urls = {
//         "Visa": '../img/visa.png',
//         "MasterCard": '../img/master-card.svg'
//     }
//     return urls(type)
// }


export default CreditCard;