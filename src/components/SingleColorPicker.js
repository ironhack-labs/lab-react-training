export function SingleColorPicker({color,value, changeColor, name}){
    return(
     <div className="m-3 my-4">
     <div className="d-flex align-items-center">
     <div className="border border-dark border-3" style={{backgroundColor: `rgb(${value},0,0)`, width: "50px", height: "50px"}}></div>
        <p className="fs-5 fw-bold ms-3 me-2">{color.toUpperCase()}:</p>
        <input onChange={(event) => changeColor(event)} style={{maxWidth: "80px"}} type="number" name={name} value={value} />
        </div>
     </div>
    );
}