import { useState } from "react";
import SingleColorPicker from "../ColorPicker";

function ColorPicker() {

    const [rValue, setRValue] = useState(250)
    const [gValue, setGValue] = useState(150)
    const [bValue, setBValue] = useState(0)


    return (

        <div style={{ display: 'flex', justifyContetn: 'center', flexDirection: 'column', width: '100px' }}>
            <SingleColorPicker color="r"
                value={rValue}
                onChange={(event) => { setRValue(event.target.value) }} />

            <SingleColorPicker color="g"
                value={gValue}
                onChange={(event) => { setGValue(event.target.value) }} />

            <SingleColorPicker color="b"
                value={bValue}
                onChange={(event) => { setBValue(event.target.value) }} />

            <div style={{ width: '30px', height: '30px', backgroundColor: `rgb(${rValue},${gValue},${bValue})` }}></div>
            <p>rgb({rValue},{gValue},{bValue})</p>
        </div>
    )
}

export default ColorPicker;