import { useState } from "react";

import SingleColorPicker from './SingleColorPicker';

export default function RGBColorPicker() {

    const [rValue, updateRValue] = useState(0);
    const [gValue, updateGValue] = useState(0);
    const [bValue, updateBValue] = useState(0);

    const color = `rgb(${rValue},${gValue},${bValue})`;
    console.log("color", color);

    return <div className="color-picker">
        <SingleColorPicker 
            color="r"
            value={rValue}
            onChange={ (value) => updateRValue(+value)  }
            />

            <SingleColorPicker 
            color="g"
            value={gValue}
            onChange={ (value) => updateGValue(+value)  }
            />

            <SingleColorPicker 
            color="b"
            value={bValue}
            onChange={ (value) => updateBValue(+value)  }
            />
            <div className="color-single">
                <div className="color-box" style={{backgroundColor: color}} ></div>
                <span>{color}</span>
            </div>

    </div>

}