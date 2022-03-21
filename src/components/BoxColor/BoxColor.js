import React from 'react';

const BoxColor = ({ r, g, b }) => {
    const divStyle = {
        backgroundColor: ["rgb(", r, ",", g, ",", b, ")"].join("")
    };
    return (
        <div style={divStyle} className='mt-2 card border-dark'>
            {`rgb(${r}, ${g}, ${b})`}
            <br/>
        </div>
    );
};

export default BoxColor;
