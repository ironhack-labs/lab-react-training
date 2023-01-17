import React, { useState } from "react";

function SingleColorPicker() {

const [redColorNumber, setRedColorNumber] = useState(255);
const [greenColorNumber, setGreenColorNumber] = useState(0);
const [blueColorNumber, setBlueColorNumber] = useState(0);

const changeRedColor = (e) => setRedColorNumber(e.target.value);

const changeGreenColor = (e) => setGreenColorNumber(e.target.value);

const changeBlueColor = (e) => setBlueColorNumber(e.target.value);

console.log(blueColorNumber)
  return (
    <div className="SCP">
  <label>Select Number:</label>
  <br></br>
  <div id="colourInput">
        <>Red</><input type="number" name="colorNumber" value={redColorNumber} onChange={changeRedColor} min="0" max="255"/>
        <>Green</><input type="number" name="colorNumber" value={greenColorNumber} onChange={changeGreenColor} min="0" max="255"/>
        <>Blue</><input type="number" name="colorNumber" value={blueColorNumber} onChange={changeBlueColor} min="0" max="255"/>
        </div>

        <div id='rgb'>

<span style={{ background: `rgb(${redColorNumber},${greenColorNumber},${blueColorNumber})` }} id='rgbColor'></span>

</div>


    </div>
  );
}

export default SingleColorPicker
