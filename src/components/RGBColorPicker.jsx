import { useState } from "react";
import SingleColorPicker from "./SingleColorPicker";

function RGBColorPicker(props) {
    const [rValue, setRValue] = useState(0) // A number between 0 and 255, representing the amount of red
    const [gValue, setGValue] = useState(0) // A number between 0 and 255, representing the amount of green
    const [bValue, setBValue] = useState(0) // A number between 0 and 255, representing the amount of blue


    const colorPickerContainerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
    }
    const squareStyle = {
        display: 'inline-block',
        padding: '20px',
        marginRight: '10px',
        border: '1px solid black',
    }

    const rSquareStyle = { ...squareStyle, backgroundColor: `rgb(${rValue}, 0, 0)` };
    const gSquareStyle = { ...squareStyle, backgroundColor: `rgb(0, ${gValue}, 0)` };
    const bSquareStyle = { ...squareStyle, backgroundColor: `rgb(0, 0, ${bValue})` };

    const mixedSquareStyle = { ...squareStyle, backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})` };

    const colorLineStyle = {
        width: '100%'
    }

    const colorPickerStyle = {
        display: 'inline-block'
    }



    function rColorChange(colorNumber) {
        setRValue(colorNumber);
    }

    function gColorChange(colorNumber) {
        setGValue(colorNumber);
    }

    function bColorChange(colorNumber) {
        setBValue(colorNumber);
    }

    return (
        <div style={colorPickerContainerStyle}>
            <div style={colorLineStyle}>
                <div id="rSquare" style={rSquareStyle}></div>
                <div style={colorPickerStyle}>
                    <SingleColorPicker
                        color="r"
                        value={rValue}
                        onChange={rColorChange}
                    />
                </div>
            </div>
            <div style={colorLineStyle}>
                <div id="gSquare" style={gSquareStyle}></div>
                <div style={colorPickerStyle}>
                    <SingleColorPicker
                        color="g"
                        value={gValue}
                        onChange={gColorChange}
                    />
                </div>
            </div>
            <div style={colorLineStyle}>
                <div id="gSquare" style={bSquareStyle}></div>
                <div style={colorPickerStyle}>
                    <SingleColorPicker
                        color="b"
                        value={bValue}
                        onChange={bColorChange}
                    />
                </div>
            </div>

            <div style={colorLineStyle}>
                <div style={mixedSquareStyle}> rgb({rValue}, {gValue}, {bValue})</div>
            </div>
        </div >
    )
}

export default RGBColorPicker;