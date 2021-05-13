import React from 'react';

function SingleColorPicker(props) {
    const {color, value, onChange} = props;
    const valueLookup={r: "Red", b:"Blue", g:"Green"} 
    let backgroundColor = `rgb(${color==="r"?value:0},${color==="g"?value:0},${color==="b"?value:0})`;
    return (
        <div>
           <div style={{width: "50px", height:"0", paddingBottom:"50px", borderStyle:"solid", backgroundColor: `${backgroundColor}`}}></div> 
           {valueLookup[color]}: <input type="number" id="number" name="number" min="0" max="255" step="25" value={value} onChange={(event)=>onChange(event, color)}></input>  
        </div>
    )
}

export default SingleColorPicker
