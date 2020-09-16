import React, {useState} from 'react'
import SingleColorPicker from "./SingleColorPicker"

const RGBColorPicker = () => {

    
    let [rValue, setRValue] = useState(255);
    let [gValue, setGValue] = useState(100);
    let [bValue, setBValue] = useState(0);


    let  style = { backgroundColor : `rgb(${rValue}, ${gValue}, ${bValue})`}

    return (
        <div>
            <SingleColorPicker value={rValue} color="R" onChange={setRValue}/>
            <SingleColorPicker value={gValue} color="G" onChange={setGValue}/>
            <SingleColorPicker value={bValue} color="B" onChange={setBValue}/>
            <h3>Resulting Color:</h3>            
            <div style={style}>
            &nbsp;
            </div>
        </div>
    )
}

export default RGBColorPicker
