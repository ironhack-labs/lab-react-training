const BoxColor = (props) => {
    const background = `rgb(${props.r},${props.g},${props.b})`
    const componentToHex = (c) => {
        const hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      }
      
      const rgbToHex = (r, g, b) => {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
      }
    return(
       <div className="p-4 m-2 d-flex flex-column justify-content-center align-items-center " style={{background: background,border:'2px solid black'}}>
          <div>{background}</div>
          <div>{rgbToHex(props.r,props.g,props.b)}</div>
       </div>
    )
}
export default BoxColor