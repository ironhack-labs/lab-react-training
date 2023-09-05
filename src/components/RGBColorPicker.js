import React, {useState} from "react";

const SingleColorPicker = ({color, value, onChange}) => {
    return (
        <div>
            <label>{color.toUpperCase()}:</label>
            <input 
                type="number"
                value={value}
                onChange={(event) => onChange(event.target.value)}
                min="0"
                max="255"
            />
        </div>
    );
};

const RGBColorPicker = () => {
    const [rValue, setRValue] = useState(0);
    const [gValue, setGValue] = useState(0);
    const [bValue, setBValue] = useState(0);

    const handleRChange = (value) => {
        setRValue(value);
    };

    const handleGChange = (value) => {
        setGValue(value);
    };

    const handleBChange = (value) => {
        setBValue(value);
    };

    const rgbColor = `rgb(${rValue}, ${gValue}, ${bValue})`;

    return (
        <div>
            <SingleColorPicker 
                color="r"
                value={rValue}
                onChange={handleRChange}
            />
            <SingleColorPicker 
                color="g"
                value={gValue}
                onChange={handleGChange}
            />
            <SingleColorPicker 
                color="b"
                value={bValue}
                onChange={handleBChange}
            />
            <div style={{ backgroundColor: rgbColor, width: '100px', height: '100px' }}></div>
            <p>{rgbColor}</p>
        </div>
    );
};

export default RGBColorPicker;