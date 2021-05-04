import React from 'react';

export default function IdCard(props) {
    return (
        <>
            <div>
                <img src= {props.picture} />
            </div>
            <div style={{margin: "5px", padding: "5px"}}>
                <strong>First Name:</strong> {props.firstName}<br></br>
                <strong>Last Name:</strong> {props.lastName}<br></br>
                <strong>Gender:</strong> {props.gender}<br></br>
                <strong>Height:</strong> {props.height}<br></br>
                <strong>Birth:</strong> {props.birth}<br></br>
            </div>
        </>
    )
}

// How do I make sure the height is formatted properly?
// Which method do I need to format the date properly?