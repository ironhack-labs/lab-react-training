import React from 'react';
import './CreditCard.css';

export default function CreditCard(props) {


        return (
            <div className="Credit-card-iteration" style={{ backgroundColor: props.bgColor , color: props.color, }}>


                <img className="visa-master" src={`${props.type == 'Visa'? '/img/visa.png' : '/img/master-card.svg'}`} alt=""/>
    
                <div className="card-num">•••• •••• •••• {props.number.slice(-4)}</div>

                <div className="expiration-bank">
                    <div className="expiration-date">Expires: {Number(props.expirationMonth) > 9 ? props.expirationMonth : '0'+ props.expirationMonth}/{props.expirationYear.toString().slice(-2)}</div>
                    <div>{props.bank}</div>
                </div>

                <div className="owner-card">{props.owner}</div>

            </div>
        )
}