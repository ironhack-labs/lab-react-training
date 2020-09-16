import React, { useState } from 'react'
import SingleColorPicker from './SingleColorPicker'

const RGBColorPicker = () => {
    let [rValue, setRValue] = useState(0)
    let [gValue, setGValue] = useState(0)
    let [bValue, setBValue] = useState(0)
    return (
        <div>
            <SingleColorPicker
                color='r'
                value={rValue}
                onChange={(e) => setRValue(e.target.value)}
            />
            <SingleColorPicker
                color='g'
                value={gValue}
                onChange={(e) => setGValue(e.target.value)}
            />
            <SingleColorPicker
                color='b'
                value={bValue}
                onChange={(e) => setBValue(e.target.value)}
            />
            <div style={{ display: 'flex' }}>
                <div style={{ border: "2px solid black", backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})`, width: 50, height: 50 }}></div>
                <p style={{ marginLeft: 15 }}>rgb({rValue}, {gValue}, {bValue})</p>
            </div>
        </div>
    )
}

export default RGBColorPicker
