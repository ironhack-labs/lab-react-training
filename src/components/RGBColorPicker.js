import { useState } from "react";
import SingleColorPicker from "./SingleColorPicker";

const RGBColorPicker = () => {

    const [rValue, setRValue] = useState(0);
    const [gValue, setGValue] = useState(0);
    const [bValue, setBValue] = useState(0);

    const square1 = {
        width: "50px",
        height: "50px",
        backgroundColor: `rgb(${ rValue }, 0, 0)`
    }

    const square2 = {
        width: "50px",
        height: "50px",
        backgroundColor: `rgb(0, ${ gValue }, 0)`
    }

    const square3 = {
        width: "50px",
        height: "50px",
        backgroundColor: `rgb(0, 0, ${ bValue })`
    }

    const square4 = {
        width: "50px",
        height: "50px",
        backgroundColor: `rgb(${ rValue }, ${ gValue }, ${ bValue })`
    }

    const handlerValue= (e) => {
        if(e.target.value >= 255){
            return setRValue(255)
        } else if(e.target.value <= 0) {
         setRValue(0)
    } else {
        setRValue(e.target.value)
    }
    }

    const handlegValue= (e) => {
        if(e.target.value === 255){
            return gValue - 1
        }

        setGValue(e.target.value)
    }

    const handlebValue= (e) => {
        if(e.target.value === 255){
            return bValue - 1
        }

        setBValue(e.target.value)
    }

    return <div>
        <div style={square1}></div>
    <SingleColorPicker 
  color="r"
  value={rValue}
  onChange={ (e) => {handlerValue(e)}  }
/>
<div style={square2}></div>
<SingleColorPicker 
  color="g"
  value={gValue}
  onChange={ (e) => {handlegValue(e)}  }
/>
<div style={square3}></div>
<SingleColorPicker 
  color="b"
  value={bValue}
  onChange={ (e) => {handlebValue(e)}  }
/>
<div style={square4}></div>
    </div>
}

export default RGBColorPicker;