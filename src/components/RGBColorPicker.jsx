import SingleColorPicker from "./SingleColorPicker";
import { useState } from "react";

/* eslint-disable react/prop-types */
function RGBColorPicker() {
    const [ rValue, setRed ] = useState(0)
    const [ gValue, setGreen ] = useState(0)
    const [ bValue, setBlue ] = useState(0)

    return (
        <div>
            <SingleColorPicker 
                color="r"
                value={rValue}
                onChange={(event) => setRed(event.target.value)}
            />

            <SingleColorPicker 
                color="g"
                value={gValue}
                onChange={(event) => setGreen(event.target.value)}
            />

            <SingleColorPicker 
                color="b"
                value={bValue}
                onChange={(event) => setBlue(event.target.value)}
            />

            <div style={{display: "flex", width: "240px", margin: "5px auto", alignItems: "center"}}>
                <div className="colorPicker" style={{backgroundColor: `rgb(${rValue},${gValue},${bValue})`}}></div>
                <span>{`rgb(${rValue},${gValue},${bValue})`}</span> 
            </div>
        </div>
    )
}

export default RGBColorPicker