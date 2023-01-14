import "./BoxColor.css"

function BoxColor(props){
    const { r, g, b } = props
    const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
        const hex = x.toString(16)
        return hex.length === 1 ? '0' + hex : hex
      }).join('')
      
      console.log(rgbToHex(0, 51, 255)); // '#0033ff'
    return(
        <div style={{backgroundColor: `rgb(${r},${g},${b})` }} className="Box">
        <p className="alligned">Color is : rgb({r},{g},{b})</p>
        <p className="alligned">Hex Color is : {rgbToHex(r,g,b)}</p>
        </div>
    )
}

export default BoxColor