import './RGBColorPicker.css'
import SingleColorPicker from '../SingleColorPicker'
import { useState } from 'react'

const RGBColorPicker = () => {
    const [rValue, setRValue] = useState(0)
    const [gValue, setGValue] = useState(0)
    const [bValue, setBValue] = useState(0)
    const colorHandler = (val, col) => {
        switch (col) {
            case 'r':
                setRValue(val)
                break
            case 'g':
                setGValue(val)
                break
            case 'b':
                setBValue(val)
                break
            default:

        }
    }
    return (
        <>
            <SingleColorPicker
                color="r"
                value={rValue}
                onChange={colorHandler}
            />

            <SingleColorPicker
                color="g"
                value={gValue}
                onChange={colorHandler}
            />

            <SingleColorPicker
                color="b"
                value={bValue}
                onChange={colorHandler}
            />
            <div className='outputColor'>
                <div style={{ backgroundColor: `rgb(${rValue},${gValue},${bValue})` }} className='ColorArea'></div>
                <p>RGB({rValue},{gValue},{bValue})</p>
            </div>
        </>
    )
}

export default RGBColorPicker