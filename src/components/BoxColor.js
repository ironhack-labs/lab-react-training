function BoxColor (props) {

    const divStyle = {
        backgroundColor: `rgb(${props.r},${props.g},${props.b})`,
        height: '3em',
        width: '50em',
        border: '1px solid black',
        margin: '1em'
      };

    return (
        <div className="BoxColor" style={divStyle}>
            <p>rgb({props.r},{props.g},{props.b})</p>
        </div>
    )
}
export default BoxColor;