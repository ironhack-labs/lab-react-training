import React from 'react'
import './creditcard.css'

const CreditCard = (props) => {

    const divStyleCard = {
        color: `${props.color}`,
        borderRadius: '10px',
        backgroundColor: `${props.bgColor}`,
        margin: '20px',
        padding: '20px',
        width: '280px',
        height: '180px'
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
            <div id="img-cb">
            <img src={imgSrc} alt="" width="20%"/>
            </div>
            {/* <p>{props.number}</p> */}
            <p id="num-cb">**** **** **** {chars[length-3]}{chars[length-2]}{chars[length-1]}{chars[length]}</p>
            <div id="cb-exp-bank">
                <p>expire {props.expirationMonth}/{props.expirationYear}</p>
                <p id="bank">{props.bank}</p>
            </div>
            <p>{props.owner}</p>
        </div>
    )
}

export default CreditCard
