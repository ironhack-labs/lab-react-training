import React from "react";
import SingleColorPicker from "../singlecolorpicker/SingleColorPicker"


function RGBColorPicker() {
    const [rValue, setRValue] = React.useState(0);
    const [gValue, setGValue] = React.useState(0);
    const [bValue, setBValue] = React.useState(0);

    let colorResult = `rgb(${rValue}, ${gValue}, ${bValue})`

    function onChange(event, color){
        console.log(color)
            if(color==="r"){
                setRValue(event.target.value)}
            if(color==="g"){
                setGValue(event.target.value)}
            if(color==="b"){
                setBValue(event.target.value)}
    }

    return (
        <div>
        <SingleColorPicker color="r" value={rValue} onChange={onChange}/>
        <SingleColorPicker color="g" value={gValue} onChange={onChange}/>
        <SingleColorPicker color="b" value={bValue} onChange={onChange}/>


        <div>
           <div style={{width: "50px", height:"0", paddingBottom:"50px", borderStyle:"solid", backgroundColor: `${colorResult}`}}></div> {colorResult}
        </div>
        </div>
    )
}

export default RGBColorPicker
