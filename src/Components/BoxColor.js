
function BoxColor(props) {
    const { r, g, b } = props;
    return (
      // How to interpolate in react:
      <div className="box-color" style={{ backgroundColor: `rgb(${r},${g},${b})` }}>
        <p>
          rgb({r},{g},{b})
        </p>
      </div>
    );
  }
  
  export default BoxColor;