/* eslint-disable react/prop-types */
function SingleColorPicker(props) {
    const { color, value, onChange } = props
    const bgColor = color == "r" ? `rgb(${value},0,0)` :
                    color == "g" ? `rgb(0,${value},0)` :
                    `rgb(0,0,${value})`

    return (
        <div style={{display: "flex", width: "240px", margin: "5px auto", alignItems: "center"}}>
           <div className="colorPicker" style={{backgroundColor: bgColor}}></div> 
           <label>{color.toUpperCase()}: </label>
           <input type="number" onChange={onChange} value={value} min="0" max="255"></input>
        </div>
    )
}

export default SingleColorPicker