import {useState} from "react";

function SingleColorPicker({color, value, onChange}) {
//   const [backgroundColor, setBackgroundColor] = useState("");
//     if (color==="r") {setBackgroundColor("red")}

  return (
    <div style={{display:"flex", flexDirection:"row"}}>
        <div style={{width:"20px", height:"20px", border: "1px black solid", 
        backgroundColor: "red"}}></div>

        <div>
            <label>{color.toUpperCase()}: </label>
            <input type="number" onChange={onChange}/>
        </div>

    </div>
  )
}

export default SingleColorPicker
