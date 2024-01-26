import SingleColorPicker from "./SingleColorPicker";
import { useState } from "react";

function RGBColorPicker() {
    const [ rValue, setRValue ] = useState(0);
    const [ gValue, setGValue ] = useState(0);
    const [ bValue, setBValue ] = useState(0);

    const handleRChange = value => setRValue(value);
    const handleGChange = value => setGValue(value);
    const handleBChange = value => setBValue(value);
    
    return (
        <div>
            <SingleColorPicker color="r" value={rValue} onChange={handleRChange} />
            <SingleColorPicker color="g" value={gValue} onChange={handleGChange} />
            <SingleColorPicker color="b" value={bValue} onChange={handleBChange} /> 

            <div
             style={{
                width: '100px',
                height: '100px',
                margin: 'auto',
                border: '3.5px solid black',
                backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})`
             }}   
            >    
            </div>
        </div>
    );
}

export default RGBColorPicker;