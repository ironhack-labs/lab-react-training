import { useState } from "react";
import { SingleColorPicker } from "./SingleColorPicker";
import { nanoid } from "nanoid";

export function RgbColorPicker(){
  const values = {rValue: "255", gValue: "150", bValue: "0"}
  const [rgbValue, setRgbValue] = useState(values)

  const changeColor = (event) => {
    const {value,name} = event.target;
     const updatedRgbValue = {...rgbValue, [name]: value};
     setRgbValue(updatedRgbValue)
  }

  return(
      <div>
      <SingleColorPicker key={nanoid()} name="rValue" changeColor={changeColor} color="r" value={rgbValue.rValue} />
      <SingleColorPicker key={nanoid()} name="gValue" changeColor={changeColor} color="g" value={rgbValue.gValue} />
      <SingleColorPicker key={nanoid()} name="bValue" changeColor={changeColor} color="b" value={rgbValue.bValue} />
      <div className="d-flex align-items-center">
     <div className="border border-dark border-3 m-3" style={{backgroundColor: `rgb(${rgbValue.rValue},${rgbValue.gValue},${rgbValue.bValue})`, width: "50px", height: "50px"}}></div>
     <p className="fs-5">{`rgb(${values.rValue},${values.gValue},${values.bValue})`}</p>
     </div>
   </div>
  );
}