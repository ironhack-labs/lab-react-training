//jshint esversion:9

import { useState } from "react";
import { SingleColorPicker } from "./SingleColorPicker";

export const RGBColorPicker = () => {
    const [rValue,setRValue] = useState(0);
    const [gValue,setGValue] = useState(0);
    const [bValue,setBValue] = useState(0);

    const handleOnChange = (color, NumValue) => {
        if(color === "r"){
            setRValue(NumValue);
        }
        if(color === "g"){
            setGValue(NumValue);
        }
        if(color === "b"){
            setBValue(NumValue);
        }
    };

    return(

        <div className="RGBColorPicker"> 
            <label>
                <span style={{backgroundColor: 'red', border: "1px solid #000"}}></span> R:<SingleColorPicker color="r" value={rValue} onChangeFn={ handleOnChange } />
            </label>

            <label>
                <span style={{backgroundColor: 'green', border: "1px solid #000"}}></span> G:<SingleColorPicker color="g" value={gValue} onChangeFn={ handleOnChange } />
            </label>

            <label>
                <span style={{backgroundColor: 'blue', border: "1px solid #000"}}></span> B:<SingleColorPicker color="b" value={bValue} onChangeFn={ handleOnChange } />
            </label>
            <label>
                <span style={{backgroundColor: `rgb(${rValue},${gValue},${bValue})`, border: "1px solid #000"}}></span> rgb({rValue},{gValue},{bValue})
            </label>
        </div>
    )
};