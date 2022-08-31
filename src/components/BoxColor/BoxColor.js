import './BoxColor.css'

function BoxColor({r,g,b}){

  
  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  
  const rgbToHex =  "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  



  return(
    <div className='row border border-dark m-5 d-flex justify-content-center align-items-center' style={{backgroundColor:`rgba(${r}, ${g}, ${b}, 1)`}}>
      <p className='m-0 text-center py-5'>rgb({r},{g},{b}) <br/> {rgbToHex}</p>

    </div>
  )
}

export default BoxColor