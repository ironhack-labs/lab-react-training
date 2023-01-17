import { useState } from "react"
import './RGBColorPicker.css'
import SingleColorPicker from "../SingleColorPicker/SingleColorPicker"


function RGBColorPicker(){
    const [rValue, setRValue] = useState('100')
    const [gValue, setGValue] = useState('65')
    const [bValue, setBValue] = useState('65')

    const onChange = (e) =>{
        const value = e.target.value
        
        const color = e.target.__reactProps$awcjvz43ufn.color
        console.log(color)
        if (color === 'r'){
            setRValue(value)
        }
        else if (color ==='g'){
            setGValue(value)
        }
        else if (color ==="b"){
            setBValue(value)
        }
        
    }

    return(
        <div className="flex-column">
            <SingleColorPicker color="r" value={rValue} setRValue={setRValue} onChange={(e)=>onChange(e)}>R: </SingleColorPicker>
            <SingleColorPicker color="g" value={gValue} setGValue={setGValue} onChange={(e)=>onChange(e)}>G: </SingleColorPicker>
            <SingleColorPicker color="b" value={bValue} setBValue={setBValue} onChange={(e)=>onChange(e)}>B: </SingleColorPicker>
         <div className="flex center-content">
            <div style={{background:`rgb(${rValue}, ${gValue}, ${bValue})`}} className="color-box"></div>
            <p>rgb({rValue},{gValue},{bValue})</p>
            </div>
        </div>
    )
}
export default RGBColorPicker