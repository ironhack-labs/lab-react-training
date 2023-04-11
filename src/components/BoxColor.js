
function BoxColor(props) {
    const { r, g, b } = props;

    const divStyle = {
      backgroundColor: `rgb(${r}, ${g}, ${b})`,
      width: '300px',
      height: '100px',
      display: "flex",
    justifyContent: "center",
    alignItems: "center"
    };

    const divGenStyle = {
      display: "flex",
         flexDirection: "column",
         alignItems: "center",
}
  

 return (
   <div style={divGenStyle}>

    <div style={divStyle}>rgb({r}, {g}, {b})</div>
   </div>
 )
}

export default BoxColor