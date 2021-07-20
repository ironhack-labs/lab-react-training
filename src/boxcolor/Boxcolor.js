import './box-color.css'

function Boxcolor ({r,g,b}){
  const componentToHex = function(c){ 
    let hex = c.toString(16);
    
    console.log(c)
    return hex.length == 1 ? "0" + hex : hex;
  }
  let divColor =`(${r},${g},${b})`
  let rgbToHex = `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`
  // console.log(rgbToHex)
  // console.log(divColor)
    return(
      <div style={{
          backgroundColor: `rgb${divColor}`,
          height: '100px',
          marginLeft: '10px',
          marginRight: '10px',
          border: '2px solid black',
          display: 'block',
          marginBottom: '10px'
      }}
      >
        <h4 style ={{textAlign: 'center'}}>rgb{divColor}</h4>
        <h5 style ={{textAlign: 'center'}}>{rgbToHex}</h5>
    </div>
    )
}

export default Boxcolor