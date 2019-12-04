import React from 'react';
import { CreditCard } from '../styles/components';

function CreditCardComponent (porps) {
    let compImg = '';

    let backColor = {
        backgroundColor: `${porps.bgColor}`
    };

    if(porps.type === 'Visa') {
        compImg = "./../../img/visa.png";
    } else {
        compImg = "./../../img/master-card.svg";
    }

    return (
            <CreditCard style={backColor}>
                <img src={compImg} alt="Company"/>
                <h3>{porps.number}</h3>
                <p>Expires {porps.expirationMonth}/{porps.expirationYear} {porps.bank}</p>
                <p>{porps.owner}</p>
            </CreditCard>
    );
};

export default CreditCardComponent;