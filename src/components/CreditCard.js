import React from 'react';
import styled from 'styled-components';

function CreditCard(props) {

    // STYLE
    const Div = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-radius: 5px;
        width: 300px;
        height: 150px;
        box-sizing: border-box;
        padding: 20px;
        margin-right: 20px;
    `;

    const Span = styled.span`
        font-size: 1.5em;
        font-weight: bold;
    `;

    const P = styled.p`
        margin-right: 10px;
    `;

    const Img = styled.img`
        max-width: 45px;
    `;

    // ---- END OF STYLE

    let typeImg;

    if(props.type === 'Visa'){
        typeImg = '../img/visa.png'
    } else if(props.type === 'Master Card'){
        typeImg = '../img/master-card.svg'
    }

    function formatDate(number){
        const stringNumber = number.toString();

        if(stringNumber.length === 1){
            return "0" + stringNumber
        } else if(stringNumber.length === 4){
            return stringNumber.slice(-2)
        } else{
            return stringNumber;
        }
    }

    function hidenCardNumber(cardNumber){
        const stringNumber = cardNumber.toString();

        const last4Numbers = stringNumber.slice(-4);

        return `•••• •••• •••• •••• ${last4Numbers}`;
    }

    return(
        <Div style={{"background-color": props.bgColor, "color": props.color}}>
            <Img src={typeImg} alt="card type logo" style={{"align-self": "flex-end"}} />
            <Span>{hidenCardNumber(props.number)}</Span>
            <div style={{
                "align-self": "flex-start", 
                "text-align": "left", 
                "width": "100%", 
                "display": "flex", 
                "flex-direction": "column"
                }}>
                <div style={{"display": "flex"}}>
                    <P>Expires {formatDate(props.expirationMonth)}/{formatDate(props.expirationYear)}</P>
                    <P>{props.bank}</P>
                </div>
                <p>{props.owner}</p>
            </div>
        </Div>
    )
};

export default CreditCard;