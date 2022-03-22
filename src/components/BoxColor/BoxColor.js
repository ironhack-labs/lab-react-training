import "./BoxColor.css";

function BoxColor ({r, g, b}){
    const color = `${r}, ${g}, ${b}`;
    
    const divStyle = {
      backgroundColor: `rgb(${color})`,
      //color: `rgb(${color})`,
    };

    return (
        <h3 className="border text-start" style={divStyle}>
          rgb {'('}{r}, {g}, {b} {')'}
        </h3>
    )
}

export default BoxColor;