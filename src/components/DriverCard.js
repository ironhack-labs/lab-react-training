import React from 'react';

export default function DriverCard(props) {
    return (
        <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
            <div>
                <img src={props.img} />
            </div>
            <div style={{display: "flex", flexDirection: "column"}}>
                <h2>{props.name}</h2>
                <p>{props.rating}</p>
                {/* <p>{props.car}</p> */}
            </div>
        </div>
    )
}

// Which methods should I use to create rating? (Same as iteration 6).
// How do I properly reference objects in JSX?