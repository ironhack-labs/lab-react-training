import SingleColorPicker from "./SingleColorPicker"
import {useState} from "react"

function RGBColorPicker(){

    const [rValue, setRValue] = useState(0);
    const [gValue, setGValue] = useState(0);
    const [bValue, setBValue] = useState(0);

    const handleRChange = (event) => {
        setRValue(event.target.value);
    }

    const handleGChange = (event) => {
        setGValue(event.target.value);
    }

    const handleBChange = (event) => {
        setBValue(event.target.value);
    }


    return(
        <div>
            <SingleColorPicker 
                color="r"
                value={rValue}
                onChange={handleRChange}
            />

            <SingleColorPicker 
                color="g"
                value={gValue}
                onChange={handleGChange}
            />

            <SingleColorPicker 
                color="b"
                value={bValue}
                onChange={handleBChange}
            />

            <div className="single-color-picker">
                <div className="square" style={{backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})`}}></div>
                <div>rgb({rValue},{gValue},{bValue})</div>
            </div>
        </div>

    )
}

export default RGBColorPicker