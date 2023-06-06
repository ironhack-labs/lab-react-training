import {useState, useEffect} from "react";

function SingleColorPicker({color, value, onChange}) {
  const [bgColor, setBackgroundColor] = useState("");
    

  useEffect (() => {
    switch (color) {
      case "r" : setBackgroundColor ( `rgb(${value},0,0)`);
      break;
      case "g" : setBackgroundColor ( `rgb(0,${value},0)`);
      break;
      case "b" : setBackgroundColor ( `rgb(0,0,${value})`);
      break;
      default: break;
    }
  },[value]  )
  
  
  
  return (
    <div style={{display:"flex", flexDirection:"row"}}>
        <div style={{width:"20px", height:"20px", border: "1px black solid", backgroundColor: bgColor}}>
   
        </div>
        <div>
            <label>{color.toUpperCase()}: </label>
            <input type="number" min="0" max="255" onChange={onChange}/>
            <p>{bgColor}</p>
            <p>{value}</p>
        </div>
    </div>
  )
}

export default SingleColorPicker
