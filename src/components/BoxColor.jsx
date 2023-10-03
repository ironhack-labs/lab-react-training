import { useEffect, useState } from "react";


const BoxColor = ({r, g, b}) => {
    
    const [color, setColor] = useState("0,0,0");

    useEffect(() => {
        setColor(`${r}, ${g}, ${b}`);
    }, [r,g,b]);

    const divStyle = {
        backgroundColor: `rgb(${color})`
    }
    console.log(color)
  return (
    <div style={divStyle} className="border-solid border-2 border-blue-800 p-2 m-2 text-center text-white" >
      <p>rgb({r},{g},{b})</p>
    </div>
  )
}

export default BoxColor
