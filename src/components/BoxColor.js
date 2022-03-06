function BoxColor(props) {
  const { r, g, b } = props;
  const rHex = r.toString(16).length === 1 ? '0'+r.toString(16):r.toString(16);
  const gHex = g.toString(16).length === 1 ? '0'+g.toString(16):g.toString(16);
  const bHex = b.toString(16).length === 1 ? '0'+b.toString(16):b.toString(16);

  let hex = `#${rHex}${gHex}${bHex}`;
  
const cssStyle ={
    backgroundColor: `rgb(${r},${g},${b})`
}

  return (<div style={cssStyle} className="card-color-box"> 
        <span>{cssStyle.backgroundColor}</span>
        <span>{hex}</span>
  </div>)
}

export default BoxColor;
