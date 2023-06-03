import { useState } from "react"
import SingleColorPicker from "./SingleColorPicker"
function RGBColorPicker(){
    const [rValue, setRValue] = useState(255)
    const [gValue, setGValue] = useState(0)
    const [bValue, setBValue] = useState(0)
    const color = "rgb(" + rValue + "," + gValue + "," + bValue + ")"

    return(
        <div>
            <SingleColorPicker
                color="r"
                value={rValue}
                onChange={setRValue}
            />

            <SingleColorPicker
                color="g"
                value={gValue}
                onChange={setGValue}
            />

            <SingleColorPicker
                color="b"
                value={bValue}
                onChange={setBValue}
            />

            <div className="row">
                <div className="col-2" style={{backgroundColor: color, color: color}}>
                    {"•"}
                </div>
                <div className="col-10">
                    {color}
                </div>
            </div>
        </div>
    )
}

export default RGBColorPicker