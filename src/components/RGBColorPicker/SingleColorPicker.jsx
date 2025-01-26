import './singleColor.css'
function SingleColorPicker ({color, value, onChange}) {
    return (
        <div className="single-color-picker">
            {color === "r" && <div className='box-color' style={{backgroundColor:`rgb(${value},0,0)`}}></div>}
            {color === "g" && <div className='box-color' style={{backgroundColor:`rgb(0,${value},0)`}}></div>}
            {color === "b" && <div className='box-color' style={{backgroundColor:`rgb(0,0,${value})`}}></div>}
            
            <div className='input'>
            <label htmlFor="red">{color.toUpperCase()}: </label>
            <input type="number" name="red" id="red" value={value} onChange={onChange} />
            </div>
        </div>
    )
}
export default SingleColorPicker;