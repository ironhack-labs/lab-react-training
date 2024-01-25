import  { useState } from 'react';
import SingleColorPicker from './SingleColorPicker';

const RGBColorPicker = () => {
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

    const rgbColor = `rgb(${rValue}, ${gValue}, ${bValue})`;

    return (
        <div className="app-container">
            <div className="rgb-color-picker-container">
                <div
                    className="rgb-color-box"
                    style={{
                        backgroundColor: rgbColor,
                    }}
                ></div>

                <SingleColorPicker
                    className="single-color-picker"
                    color="r"
                    value={rValue}
                    onChange={handleColorChange}
                />
                <SingleColorPicker
                    className="single-color-picker"
                    color="g"
                    value={gValue}
                    onChange={handleColorChange}
                />
                <SingleColorPicker
                    className="single-color-picker"
                    color="b"
                    value={bValue}
                    onChange={handleColorChange}
                />
            </div>
        </div>
    );
};

export default RGBColorPicker;