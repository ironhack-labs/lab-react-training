import React from 'react'

const CreditCard = (props) => {
    let cardImage="";
    let ColorCard = {backgroundColor:props.bgColor, color:props.color}

    switch(props.type){
        case "Visa":
        cardImage ="/img/visa.png"
        break;

        case "Master Card":
            cardImage = "/img/master-card.svg"
            break;
    }
    return (
        <div style={ColorCard}>
            <img src={cardImage} alt="" style={{height:'20px'}}/>
            <p>XXXX XXXX XXXX {props.number.slice(-4)}</p>
            <p>Expires {props.expirationMonth}/{props.expirationYear.toString().slice(-2)}</p>
            <p>{props.bank}</p>
            <p>{props.owner}</p>
        </div>
    )
}

export default CreditCard;