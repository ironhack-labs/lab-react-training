import React from 'react';

const SingleColorPicker = (props) => {
    let BGRColor;
    switch(props.color) {
        case "r":
            BGRColor="red";
            break;
        case "g":
            BGRColor="green";
            break;
        default:
            BGRColor="black";
            break;
    }
    return (
        <div className="SingleColorPicker">
          <div className="colorBox" style={{ backgroundColor: `${BGRColor}` }}></div>
          <span className="ml-2">{props.color.toUpperCase()}:</span>
          <input type="number" name={`${props.color}Value`} value={props.value} max={255} min={0} onChange={e => props.onChange(e)}/>
        </div>
    )
}

export default SingleColorPicker;