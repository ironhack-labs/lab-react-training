function Boxcolor (props){
    const rgbToHex = "#" + ((1 << 24) + (props.r << 16) + (props.g << 8) + props.b).toString(16).slice(1);
    
    return (
    <div style = {{backgroundColor: rgbToHex}} className="boxcolor">
    rgb(${props.r}, ${props.g}, ${props.b} <p>{rgbToHex}</p>
    </div>)
}
export default Boxcolor;