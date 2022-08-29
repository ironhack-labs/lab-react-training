import "./BoxColor.css"

function BoxColor({ r, g, b}) {
  const boxStyle = {
    backgroundColor: `rgb(${r},${g},${b})`
  }

  function rgbToHex({r},{g},{b}) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }

  return (
    <div className="box d-flex justify-content-center flex-column mx-2 my-2" style={boxStyle}>
      <p className="text-white align-self-center pt-2 pb-0"><b>rgb({r},{g},{b})</b></p>
      <p className="text-white align-self-center pt-0"><b>{rgbToHex({r},{g},{b})}</b></p>
    </div>  
  );
};

export default BoxColor;