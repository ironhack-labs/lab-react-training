import React from 'react'

const CreditCard = (props) => {

    const divStyleCard = {
        color: `${props.color}`,
        border: '1px solid black',
        backgroundColor: `${props.bgColor}`
      };

    let str = `${props.number}`;
    let length = str.length-1;
    const chars = str.split('');

    let imgSrc;
    
    if (props.type === "Visa") {
        imgSrc = "./img/visa.png";
    } else if (props.type === "Master Card") {
        imgSrc = "./img/master-card.svg";
    }

    return (
        <div style={divStyleCard}>
            <img src={imgSrc} alt="" width="10%"/>
            <p>{props.number}</p>
            <p>************{chars[length-3]}{chars[length-2]}{chars[length-1]}{chars[length]}</p>
            <p>expire {props.expirationMonth}/{props.expirationYear}</p>
            <p>{props.bank}</p>
            <p>{props.owner}</p>
        </div>
    )
}

export default CreditCard
