import { useState } from "react";
import SingleColorPicker from "./SingleColorPicker";

function RGBColorPicker() {

    const [rValue, setRValue] = useState(null)
    const [gValue, setGValue] = useState(null)
    const [bValue, setBValue] = useState(null)
    
    const style = {backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})`}

    function handleRChange(e) {
        setRValue(e.target.value)
    }

    function handleGChange(e) {
        setGValue(e.target.value)
    }

    function handleBChange(e) {
        setBValue(e.target.value)
    }

    return (
        <div className="RGBPicker">
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

            <div className="resultColorDiv">
                <div className="colorSquare" style={style}></div>
                <p>{`rgb(${rValue}, ${gValue}, ${bValue})`}</p>
            </div>
        </div>
    )
}

export default RGBColorPicker;