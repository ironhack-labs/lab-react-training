const BoxColor = props => {
    const { r, g, b} = props;
    return(
        <div className="BoxColor">
            <div className="style-box" style={{ 
                backgroundColor: `rgb(${r},${g},${b})`}}>
                rgb({r},{g},{b})</div>
        </div>
    )
}
export default BoxColor;