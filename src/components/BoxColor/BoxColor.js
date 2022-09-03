function BoxColor({r, g, b }){
const textColor = g >= 100? "black" : "white";
const rgbToHex = (r, g, b) => '#' + [r, g, b]
  .map(rgb => rgb.toString(16).padStart(2, '0')).join('')
  return(
    <div className="border border-dark col-5">
        <div className="m-2 text-center border border-dark pt-4" style={{ height: '150px', color: `${textColor}`, border: "2px, solid", backgroundColor:`rgb(${r}, ${g}, ${b})`}}>
            <h2 className="align-self-center"> rgb({r},{g},{b})</h2>
            <h2>{rgbToHex(r,g,b)}</h2>
        </div>
    </div>
  )
}
export default BoxColor