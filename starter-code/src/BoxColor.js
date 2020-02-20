import React from 'react';

const BoxColor = prop => {
    const style ={
        backgroundColor: `rgb(${prop.r},${prop.g},${prop.b})`
    }
    return(
        <div className="boxcolor" style={style}>
            <p>rgb({prop.r},{prop.g},{prop.b})</p>
        </div>
    )
};

export default BoxColor;