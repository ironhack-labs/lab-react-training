import SingleColorPicker from "./SingleColorPicker";
import { useState } from "react";

function RGBColorPicker() {

    const [rValue, setRValue] = useState(255)
    const [gValue, setGValue] = useState(150)
    const [bValue, setBValue] = useState(0)


    let divRStyle = {
        backgroundColor: `rgb(${rValue},0,0)`,
        width: 150,
        height: 150
    }
    let divGStyle = {
        backgroundColor: `rgb(0, ${gValue},0)`,
        width: 150,
        height: 150
    }
    let divBStyle = {
        backgroundColor: `rgb(0,0,${bValue})`,
        width: 150,
        height: 150
    }

    let finalDivStyle = {
        backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})`,
        width: 150,
        height: 150
    }

    let colorPicker = (color, e) => {


        if (color === 'r') {
            setRValue(e.target.value)


        }
        else if (color === 'g') {
            setGValue(e.target.value)


        }
        else if (color === 'b') {
            setBValue(e.target.value)


        }


    }

    return (
        <div className="container card pr-5" style={{ width: 800 }}>

            <SingleColorPicker
                color="r"
                value={rValue}
                divStyle={divRStyle}
                onChange={(e) => { colorPicker('r', e) }}

            />

            <SingleColorPicker
                color="g"
                value={gValue}
                divStyle={divGStyle}
                onChange={(e) => { colorPicker('g', e) }}
            />

            <SingleColorPicker
                color="b"
                value={bValue}
                divStyle={divBStyle}
                onChange={(e) => { colorPicker('b', e) }}
            />

            <div className="container card">
                <div className="d-flex justify-content-around">
                    <div style={finalDivStyle}>

                    </div>
                    <h1 className="d-flex flex-row align-items-center" style={{width:300}}>{`rgb(${rValue}, ${gValue}, ${bValue})`}</h1>
                </div>
            </div>
        </div>
    )
}
export default RGBColorPicker;
