import React, { useState }  from 'react';
import RGBColorPicker from './RGBColorPicker';

function SingleColorPicker() {
    const [ colors, setColors ] = useState("122,133,133")

    const handleChangeColor = (event) => {
        event.preventDefault();
        console.log(event.target.red.value);
        // setColors([event.target.red.value, event.target.green.value, event.target.blue.value]);
        setColors(`${event.target.red.value}, ${event.target.green.value}, ${event.target.blue.value}`);
    }

    return (
        <div>
            <RGBColorPicker  onChangeColor={handleChangeColor} />
            <div style={{background: `rgb(${colors})`}} class="show-rgb-color"></div>
            <p>rgb({colors})</p>
        </div>
    )
}

export default SingleColorPicker;

