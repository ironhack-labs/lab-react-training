import React from 'react'

const SingleColorPicker = ({name, color, value, onChange}) => {
    const colorPreview = {
        backgroundColor: name === "rValue" ? `rgb(${value}, 0, 0)` : name === "gValue" ? `rgb(0, ${value}, 0)` : `rgb(0, 0, ${value})`,
        width: '50px',
        height: '50px'
    };
    const pickerDiv = {
        display: "flex",
    };

    const changeColor = (e) => {
        const { value } = e.target;
        onChange(name, value);
    };

    return (
        <div style={pickerDiv}>
            <div style={colorPreview}></div>
            <label>{`${color}: `}
                <input type="number" min="0" max="255" value={value} onChange={changeColor} />
            </label>
        </div>
    );
}

export default SingleColorPicker;
