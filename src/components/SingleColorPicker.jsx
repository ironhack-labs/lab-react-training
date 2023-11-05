import React from 'react';
import '../styles/SingleColorPicker.css';

export default function SingleColorPicker(props) {
  if (!props.color) {
    return null;
  }

  return (
    <div className="SingleColorPicker">
      <h5>{props.color.toUpperCase()} :</h5>
      <input
        onChange={(e) => props.onChange(props.color, e.target.value)}
        placeholder="here"
        min="0"
        max="255"
        type="number"
      ></input>
    </div>
  );
}
