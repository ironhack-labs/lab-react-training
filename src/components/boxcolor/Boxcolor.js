function BoxColor (props) {
    const divStyle = {
        'background-color': `rgb(${props.r},${props.g},${props.b})`,
        'border': '1px solid black',
    }
    return (
        <div className="" style={divStyle} >
            <h5>rgb({props.r},{props.g},{props.b})</h5>
        </div>
    )
}

export default BoxColor