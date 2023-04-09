


function SingleColorPicker(props) {

    const { color, value, divStyle, onChange } = props

    return (
        <div className="container card">
            <div className="d-flex justify-content-around">

                <div style={divStyle}>

                </div>
                <div className="d-flex flex-row align-items-center" style={{width:300}}>
                    <label className="col"><h1 >{color.toUpperCase()}:</h1></label>
                    <h1 className="col"><input type='number' min='0' max='255' value={value} onChange={onChange} /></h1>
                </div>
            </div>
        </div>
    )
}
export default SingleColorPicker;