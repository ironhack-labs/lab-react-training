import { useState } from "react";
import './RGBColorPicker.css'
import SingleColorPicker from "../SingleColorPicker/SingleColorPicker";

function RGBColorPicker() {

  const [rValue, setColorR] = useState(0);
  const [gValue, setColorG] = useState(0);
  const [bValue, setColorB] = useState(0);

  const colorRValue = redValue => setColorR(redValue);
  const colorGValue = greenValue => setColorG(greenValue);
  const colorBValue = blueValue => setColorB(blueValue);

  return (
    <div>
      <SingleColorPicker color="r" value={rValue} onChange={colorRValue}/>
      <SingleColorPicker color="g" value={gValue} onChange={colorGValue}/>
      <SingleColorPicker color="b" value={bValue} onChange={colorBValue}/>

      <div className="rgbcolorpicker-container" >
        <div
          style={{ backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})` }} 
          className="boxcolor-container">  
        </div>
        <label>rgb({rValue}, {gValue}, {bValue})  </label>
      </div>
    </div>
  );
}

export default RGBColorPicker;