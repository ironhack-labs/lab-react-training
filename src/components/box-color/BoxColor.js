function BoxColor({ r, g, b, className }) {
  function rgbToHex({r}, {g}, {b}) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }

  return(
    <div className="d-flex flex-column border border-dark my-2 ps-1 justify-content-center" style={{backgroundColor: `rgb(${r}, ${g}, ${b})`}}>
      <h5 className={`pt-2 text-light align-self-center ${className}`}>rgb({r},{g},{b})</h5>
      <h5 className={`pt-2 text-light align-self-center ${className}`}>{rgbToHex({r},{g},{b})}</h5>


    </div>
  )
}

export default BoxColor;