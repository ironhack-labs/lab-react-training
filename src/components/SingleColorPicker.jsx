import { useState } from "react";

function SingleColorPicker({ color, value, onChange }) {
    
    const [ previewColor, setPreviewColor ] = useState(0);

    const handleColorChange = e => {
        const updatedValue = parseInt(e.target.value, 10);
        setPreviewColor(updatedValue);
        onChange(updatedValue);
    }

    const previewStyle = () => {
        const r = color === "r" ? previewColor : 0;
        const g = color === "g" ? previewColor : 0;
        const b = color === "b" ? previewColor : 0;

        return {
            width: '100px',
            height: '100px',
            margin: 'auto',
            border: '3.5px solid black',
            backgroundColor: `rgb(${r}, ${g}, ${b})`
        }
    }
    
    return (
        <div>
            <div style={previewStyle()}></div>
            <label htmlFor={`color-${color}`}>{color.toUpperCase()}:</label>
            <input
                type="number"
                id={`color-${color}`}
                min="0"
                max="255"
                value={value}
                onChange={handleColorChange}
            />
        </div>
    );
}

export default SingleColorPicker;