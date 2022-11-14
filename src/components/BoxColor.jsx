import React from 'react'

function BoxColor({ r, g, b }) {
    return (
        <div
            style={{
                backgroundColor: `rgb(${r},${g},${b})`,
                color: "white",
                fontSize: "20px",
                fontWeight: "600",
                height: "100px",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "30px 0",
                margin: "30px 0",
                border: "solid 3px black"
            }}
        >
            <p>{`rgb(${r},${g},${b})`}</p>
        </div >
    );
}

export default BoxColor;
