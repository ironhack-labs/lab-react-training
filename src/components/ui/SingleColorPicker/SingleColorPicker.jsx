import { useState } from "react";
import './SingleColorPicker.css';

function SingleColorPicker({ color, value, onChange }) {

  const [colorPrev, setColorPrev] = useState(0);

  const onChangeColor = colorValue => {
    const valueOnChange = parseInt(colorValue.target.value, 10);
    setColorPrev(valueOnChange);
    onChange(valueOnChange);
  }

  const stylePrev = () => {
    const r = color === 'r' ? colorPrev : 0;
    const g = color === 'g' ? colorPrev : 0;
    const b = color === 'b' ? colorPrev : 0;
  
    return {
      backgroundColor: `rgb(${r}, ${g}, ${b})`
    }
  }


  return (
    <div className="singlecolorpicker-container">
      <div style={stylePrev()} className="boxcolor-container"></div>
      <label htmlFor={`color-${color}`}>{color.toUpperCase()}:</label>
      <input 
        type='number'
        id={`color-${color}`}
        min='0'
        max='255'
        value={value}
        onChange={onChangeColor}
      />
    </div>
  );
}

export default SingleColorPicker;
