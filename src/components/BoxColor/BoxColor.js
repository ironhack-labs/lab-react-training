
function BoxColor(props) {

    const { r, g, b } = props

    const divStyle = {
        width: 1500,
        height: 200,
        background: `rgb(${r},${g},${b})`,
    };


    return <div classNames="BoxColor" style={divStyle}>
        <p>rgb({r}, {g}, {b})</p>

    </div>

}



export default BoxColor