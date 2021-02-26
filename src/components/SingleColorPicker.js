import React from 'react'

export default function SingleColorPicker(props) {

    

    function placeRGB() {
        console.log(props.todosColores)
        if (props.color === 'R') {
            return `rgb(${props.valueColor},0,0)`
        } else if (props.color === 'G') {
            return `rgb(0,${props.valueColor},0)`
        } else {
            return `rgb(0,0,${props.valueColor})`
        }
    }

    function numChange(event,color) {

        if (color === 'R') {
            return props.funcColorSet({...props.todosColores,rValue:event.target.value})
        } else if (color === 'G') {
            return props.funcColorSet({...props.todosColores,gValue:event.target.value})
        } else {
            return props.funcColorSet({...props.todosColores,bValue:event.target.value})
        }
       // todosColores = {rValue:0,gValue:0,bValue:0}
       //funcColorSet = {setColorState} 
        
    }
 
    return (
        <>
            <div>
                <p style={{backgroundColor:`${placeRGB()}`}}>Cuadriro</p>
                <label>{props.color}</label>
                <input type='number' 
                        min="0" 
                        max='255' 
                        Value={props.valueColor} 
                        onChange = {(e) => numChange(e,props.color)}
                        
                            
                />
            </div>
        </>
    )
}
