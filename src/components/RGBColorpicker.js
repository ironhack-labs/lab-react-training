import React, {useState} from 'react'

export default function RGBColorpicker() {
    const [colorPicker, setColorPicker] = useState({
            red:"",
            green:"",
            blue:""
    })
    function handleChange(event){
        setColorPicker( {
            ...colorPicker,
            [event.target.name ]: event.target.value
        })
        console.log(colorPicker)
    }
    const colorR = {
        backgroundColor : "red",
        width: "100px",
        height:"100px"
    }
    const colorG = {
        backgroundColor : "green",
        width: "100px",
        height:"100px"
    }
    const colorB = {
        backgroundColor : "blue",
        width: "100px",
        height:"100px"
    }
    const colorResult = {
        backgroundColor: `rgb(${colorPicker.red}, ${colorPicker.green}, ${colorPicker.blue})`,
        width: "100px",
        height:"100px",
        padding : "30px"
    }
    return (
        <div>
            <div className="idCard" style={colorR}></div>
            <label>R:</label>
            <input min="0" max="255" name="red" type="number" value={colorPicker.r} onChange={(event)=>handleChange(event)}/>
            <div className="idCard" style={colorG}></div>
            <label>G:</label>
            <input min="0" max="255" name="green" type="number" value={colorPicker.g} onChange={(event)=>handleChange(event)}/>
            <div className="idCard"  style={colorB}></div>
            <label>B:</label>
            <input min="0" max="255" name="blue" type="number" value={colorPicker.b} onChange={(event)=>handleChange(event)}/>
            <div className="idCard" style={colorResult}></div>
            <p>RGB =({colorPicker.red},{colorPicker.green},{colorPicker.blue}) </p>
        </div>
    )
}





