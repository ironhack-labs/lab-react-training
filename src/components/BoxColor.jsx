function BoxColor (props){
    const {r, g, b} = props;


    let divStyle = {
        backgroundColor: `rgb(${r},${g},${b})`,
        width: '100%',
        height: '50px'
    }

    return(
        <div style={divStyle}><p>rgb({r},{g},{b})</p></div>

    )
}
export default BoxColor;