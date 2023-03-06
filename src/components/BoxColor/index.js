import "./index.css"




export const BoxColor = ({r,g,b}) => {
  const divStyle = {
    backgroundColor: `rgb(${r},${g},${b})`,
}
  
  return (
    <div className="BoxColor" style={divStyle}>
       <p>rgb({r},{g},{b})</p>
    </div>
  )
}