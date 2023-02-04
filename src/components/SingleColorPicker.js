function SingleColorPicker(props) {

    const {
        color,
        value,
        onChange
    } = props

    function handleColor() {

        if (color === 'r') {
            return `rgb(${value},0,0)`
        } else if (color === 'g') {
            return `rgb(0,${value},0)`
        } else {
            return `rgb(0,0,${value})`
        }
    }

    return (
        < div style={{display:'flex', justifyContent:'space-between'}}>
            <div style={{width:'30px', height:'30px', backgroundColor: handleColor()}}></div>
            <label to='color'>{color}</label>
            <input onChange={onChange} id='color' type='number' min='0' max='255' value={value} />
        </div>
    )
}

export default SingleColorPicker;