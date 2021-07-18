import React from 'react'

function BoxColor(props) {
    const r = props.r;
    const g = props.g;
    const b = props.b;


    const divStyle = {
        'background-color': `rgb(${r},${g},${b})`,
        'border': '1px solid black',
        'text-align': 'center'
    };
    return (
        <div className="px-5 py-2 my-2" style={divStyle}>
            <p>rgb{r},{g},{b}</p>
        </div> 
    )
    
}

export default BoxColor