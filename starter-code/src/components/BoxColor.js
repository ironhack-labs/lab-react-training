import React from 'react';

const BoxColor = ({r, g, b}) => {

    return (
        <div className="black-border d-flex"  style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}>
            <p>
                RGB({r},{g},{b})
            </p>
        </div>
    )
}

export default BoxColor;
