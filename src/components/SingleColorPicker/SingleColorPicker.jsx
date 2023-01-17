

function SingleColorPicker(props){
    const { color, value, onChange, children } = props
    return(
        <div className="flex center-content">

            {color ==='r' && <div   style={{backgroundColor:`rgb(${value},0,0)`}}  className="color-box"></div>}
            {color ==='g' && <div   style={{backgroundColor:`rgb(0,${value},0)`}}  className="color-box"></div>}
            {color ==='b' && <div   style={{backgroundColor:`rgb(0,0,${value})`}}  className="color-box"></div>}
            <label>{children}</label>
            <input className="short" type="number" color ={color} value={value} onChange={onChange}/>
        </div>
    )
}

export default SingleColorPicker