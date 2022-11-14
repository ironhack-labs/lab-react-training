import React from 'react'

function Random({ min, max }) {

    const randomNumber = Math.floor(Math.random() * (max - min) + min);
    return (
        <div style={{
            fontSize: "20px",
            fontWeight: "600",
            width: "100%",
            padding: "0 3px",
            margin: "10px 0",
            border: "solid 3px black"
        }}>
            <p>Random value between {min} and {max} {"=>"} {randomNumber}</p>
        </div>
    )
}

export default Random;