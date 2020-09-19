import React from 'react';
import './CreditCard.css';

export default function CreditCard(props) {


        return (
            <div style={{ backgroundColor: props.bgColor , color: props.color, width: '400px', margin: '50px auto', }}>

                    <img style={{width: '100px', height: '70px'}}  src={`${props.type == 'Visa'? '/img/visa.png' : '/img/master-card.svg'}`} alt=""/>
    
                <div>•••• •••• •••• {props.number.slice(-4)}</div>

                <div>{Number(props.expirationMonth) > 9 ? props.expirationMonth : '0'+ props.expirationMonth}/{props.expirationYear.toString().slice(-2)}</div>

                <div>{props.bank}</div>
                <div>{props.owner}</div>


            </div>
        )
}