import React from 'react';

export default function CreditCard(props) {
    return (
        <>
            <div style={{margin: "0px", display: "flex", justifyContent: "flex-end"}}>
                <h1>{props.type}</h1>
            </div>
            <div style={{margin: "10px", textAlign: "center"}}>
                <h2>{props.number}</h2>
            </div>
            <div>
                <div style={{margin: "5px 0"}}>
                    <span>Expires {props.expirationMonth}/{props.expirationYear}&nbsp;&nbsp;&nbsp;&nbsp;</span><span>{props.bank}</span>
                </div>
                <div style={{margin: "5px 0"}}>
                    {props.owner}
                </div>
            </div>
        </>
    )
}

// How do I style the background div using a prop? (Same as iteration 4).
// How do I hide characters from the card number?

