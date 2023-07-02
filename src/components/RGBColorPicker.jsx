import { useState } from "react"

function SingleColorPicker(props){


const color={
    r: "red",
    g: "green", 
    b: "black" 
}

return (
 <div class="single-color">
     <div className="square" style={{ backgroundColor: (color[props.color]), color: (color[props.color]) }}>
     </div>
     <div>
         <input type="number" max={255} min={0} value={props.value}
          onChange={(event)=>{
            props.onChange(event.target.value)
         }} />
     </div>
 </div>
)
}

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

            <div>
                <div className="mixed-square" style={{backgroundColor: color, color: color}}>
                </div>

                <div className="color-text">
                    {color}
                </div>
            </div>
        </div>
    )
}

export default RGBColorPicker