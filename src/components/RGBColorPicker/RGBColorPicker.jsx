import React, { useState } from 'react'
import SingleColorPicker from '../SingleColorPicker/SingleColorPicker'
import './RGBColorPicker.scss'

const RGBColorPicker = () => {

    const [rValue, setrValue] = useState(255)
    const [gValue, setgValue] = useState(150)
    const [bValue, setbValue] = useState(0)

    const handleR = (e) => {
        setrValue(e.target.value)
    }

    const handleG = (e) => {
        setgValue(e.target.value)
    }

    const handleB = (e) => {
        setbValue(e.target.value)
    }

    return (
        <>
            <div className="RGBColorPicker">
                <SingleColorPicker color="red" onChange={ handleR } value={ rValue } />
                <SingleColorPicker color="green" onChange={ handleG } value={ gValue } />
                <SingleColorPicker color="blue" onChange={ handleB } value={ bValue } />
            </div>

            <div className="colorSquare" style={{ backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})` }}>
            </div>
            <span>rgb({rValue}, {gValue}, {bValue})</span>
        </>
    )
}

export default RGBColorPicker
