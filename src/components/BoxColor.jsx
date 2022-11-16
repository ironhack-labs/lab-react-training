
//TODO display hex values too
function BoxColor(props) {
    const {r, g, b} = props;
    const divStyles = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
        height: "100px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"  
    };

    const rgbToHex = () =>{
      const redToHex = () =>{
        if(r === 0) return "00";
        else return r.toString(16)
      }
      const greenToHex = () =>{
        if(g === 0) return "00";
        else return g.toString(16)
      }
      const blueToHex = () =>{
        if(b === 0) return "00";
        else return b.toString(16)
      }
      return `#${redToHex()}${greenToHex()}${blueToHex()}`
    }
    
  return (
    <div style={divStyles}>
      <p>rgb({r}, {g}, {b})</p> 
      <p>{rgbToHex()}</p>
    </div>
  )
}

export default BoxColor