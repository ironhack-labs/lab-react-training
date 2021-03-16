import React from 'react'

function Creditcard(props) {
    var id=props.number;
    var temp=id.slice(-4);
    return (
        <>
        <div>
            <div>{temp}</div>
            <div>{props.type}</div>
            <div>Expires {props.expirationYear}/{props.expirationMonth}   {props.bank}</div>
            <div>{props.owner}</div>
            
        </div>
        </>
    )
}

export default Creditcard
