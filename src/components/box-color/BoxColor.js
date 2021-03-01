
function BoxColor({r, g, b}) {
    return (
        <div style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}>
            <h3>rgb({r},{g},{b})</h3>
        </div>
    );
}

BoxColor.defaultProps = {
    className: 'm-3'
}

export default BoxColor;