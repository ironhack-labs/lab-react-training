import React from 'react';

function SingleColorPicker(props) {
    return (
      <div>
        <label>{props.color.toUpperCase()}:</label>
        <input 
            type="number" 
            min="0" 
            max="255" 
            value={props.value} 
            onChange={(e) => props.onChange(props.color, e.target.value)}
        />
      </div>
    );
}
  
export default SingleColorPicker;
