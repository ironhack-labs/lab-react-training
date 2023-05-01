function BoxColor(props) {
    const { r, g, b} = props;
  
    const color = `rgb(${r}, ${g}, ${b})`;
  
    const style = {
      backgroundColor: color,
      height: "100px",
      width: "500px",
    };
  
    return <div style={style}>{color}</div>;
  }
  
  export default BoxColor;
  