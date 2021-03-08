function BoxColor ({r, g, b}){
    const color = `rgb(${r},${g},${b})`
    const hex = `#${((1 << 24) + (parseInt(r) << 16) + (parseInt(g) << 8) + parseInt(b)).toString(16).slice(1)}`;

    return (
        <body style={{"background-color": color}} >
            <h3 >rgb({r},{g},{b})</h3>
            <h2>{hex}</h2>
        </body>
    )
}

export default BoxColor;