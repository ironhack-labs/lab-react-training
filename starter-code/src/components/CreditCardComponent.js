import React from 'react';
import { Tarjeta } from "../styles/components";


function CreditCardComponent(props) {
    let imgCard = '';
    let colorFondo = {
            backgroundColor: `${props.bgColor}`,
            color: `${props.color}`
    }
    if(props.type === 'Visa'){
        imgCard = './../../img/visa.png'
    }else {
        imgCard = './../../img/master-card.svg'
    }
    return (
        
        <div className="tarjetas">
            <Tarjeta style={colorFondo}>
            <img src={imgCard} alt='marca'/>
            <p>{props.type}</p>
            <p>{props.number}</p>
            <p>{props.propsexpirationMonth}</p>
            <p>{props.expirationYear}</p>
            <p>{props.bank}</p>
            <p>{props.owner}</p>
            </Tarjeta>
           
        </div>
    );
}

export default CreditCardComponent;