function BoxColor({r, g, b}){
  const color = `rgb(${r}, ${g}, ${b})`
  const inlineStyles = {
    backgroundColor: color
  }
  return (
    <div className="box BoxColor" style={inlineStyles}>
      {color} 
      <br/>
      {rgbToHex(r, g, b)}
    </div>
  )
}

const rgbToHex = (r, g, b) => {
  return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)}`;
};


export default BoxColor