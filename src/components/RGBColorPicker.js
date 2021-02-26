import React, {useState} from 'react'
import SingleColorPicker from './SingleColorPicker'

export default function RGBColorPicker() {
    const[colorState, setColorState] = useState({
        rValue: 0,
        gValue: 0,
        bValue: 0
    })
    
    return (
        <>
        <div>
            <SingleColorPicker color={'R'} valueColor={colorState.rValue} funcColorSet={setColorState} todosColores={colorState} />
            <SingleColorPicker color={'G'} valueColor={colorState.gValue} funcColorSet={setColorState} todosColores={colorState} />
            <SingleColorPicker color={'B'} valueColor={colorState.bValue} funcColorSet={setColorState} todosColores={colorState} />
        </div>
        <div>
            <p style={{backgroundColor:`rgb(${colorState.rValue}, ${colorState.gValue}, ${colorState.bValue})`}}>{colorState.rValue}</p>
        </div>
        </>
    )
}
