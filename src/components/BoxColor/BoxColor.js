function BoxColor({r, g, b }){
const textColor = g >= 100? "black" : "white";

  return(
<div className="border border-dark col-7 text-align-center">
<div className="m-2  text-center border border-dark" style={{ height: '170px', color: `${textColor}`, border: "2px, solid", backgroundColor:`rgb(${r}, ${g}, ${b})`}}>
     <h2 className="pt-4"> rgb({r},{g},{b})</h2>
     No se si el cambio de color servirá para mucho, pero el resultado es el requerido. <br /> 
     he mirado que hay una forma de convertir de rgb a hex, pero es un lío de cabeza a estas horas. <br /> Prefiero seguir con React
</div>
</div>
  )
}
export default BoxColor