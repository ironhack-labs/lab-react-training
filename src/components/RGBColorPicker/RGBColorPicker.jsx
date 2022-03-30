import React, { useState } from 'react'
import SingleColorPicker from './SingleColorPicker'

const RGBColorPicker = () => {
    const [rValue, setrValue] = useState(255)
    const [gValue, setgValue] = useState(150)
    const [bValue, setbValue] = useState(0)

    const handleR = (event) => {
        setrValue(event.target.value)
    }

    const handleG = (event) => {
        setgValue(event.target.value)
    }

    const handleB = (event) => {
        setbValue(event.target.value)
    }

    return(
            <div className='RGBpicker'>
                <SingleColorPicker 
                color="r"
                value={rValue}
                onChange={ handleR }
                />

                <SingleColorPicker 
                color="g"
                value={gValue}
                onChange={ handleG }
                />

                <SingleColorPicker 
                color="b"
                value={bValue}
                onChange={ handleB }
                />

                <div className='color'
                    style= {{ backgroundColor: `rgb( ${rValue}, ${gValue}, ${bValue})` }}>
                </div>
                <p>rgb({rValue}, {gValue}, {bValue})</p>

            </div>
    )
}

export default RGBColorPicker