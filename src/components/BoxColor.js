const BoxColor = (props) =>{
  return <div className="div-boxcolor" style={{ backgroundColor: `rgb(${props.r},${props.g},${props.b}) ` }}>rgb({props.r},{props.g},{props.b})<br></br></div>;
}
  export default BoxColor