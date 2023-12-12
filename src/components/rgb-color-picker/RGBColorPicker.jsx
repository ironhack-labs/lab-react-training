import React, { useState } from 'react';
import SingleColorPicker from '../single-color-picker/SingleColorPicker';


function RGBColorPicker() {
    const [rValue, setRValue] = useState(0);
    const [gValue, setGValue] = useState(0);
    const [bValue, setBValue] = useState(0);

    const handleColorChange = (color, value) => {
        switch (color) {
            case 'r':
                setRValue(value);
                break;
            case 'g':
                setGValue(value);
                break;
            case 'b':
                setBValue(value);
                break;
            default:
                break;
        }
    };

    return (
        <div>
            <SingleColorPicker color="r" value={rValue} onChange={(value) => handleColorChange('r', value)} />
            <SingleColorPicker color="g" value={gValue} onChange={(value) => handleColorChange('g', value)} />
            <SingleColorPicker color="b" value={bValue} onChange={(value) => handleColorChange('b', value)} />

            <div className="box-color" style={{ backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})` }}></div>
        </div>
    );
}

export default RGBColorPicker;
