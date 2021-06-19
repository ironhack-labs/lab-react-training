import React from 'react';

const BoxColor = ({r,g,b}) => (
    <div className="boxColor" style={{backgroundColor: `rgb(${r},${g},${b})`}}>
        <div className="box" style={{color: `${setColor(r,g,b)}`}}>
            <span>rgb{'('}{r},{g},{b}{')'}</span>
            <span>#{numberToHex(r)}{numberToHex(g)}{numberToHex(b)}</span>
        </div>
    </div>
)

function numberToHex(num) {
    num = parseInt(num).toString(16);
    return (num.length==1) ? "0"+num : num;
}

function setColor(r,g,b) {
    if(parseInt(r)+parseInt(g)+parseInt(b) <= 255) {
        return "white";
    }
    else {
        return "black";
    }
}

export default BoxColor;