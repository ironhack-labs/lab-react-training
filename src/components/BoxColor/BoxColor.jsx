function BoxColor(props) {

    const { r, g, b } = props
    const divStyle = {

        height: 100,
        background: `rgb(${r},${g},${b})`

    }

    return (<div style={divStyle}>rgb ({r},{g},{b})</div>)

}

export default BoxColor