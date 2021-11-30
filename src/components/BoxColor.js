function BoxColor({r, g, b}) {

    const componentToHex = (c) => c.toString(16).length == 1 ? "0" + c.toString(16) : c.toString(16);
    const rgbToHex = (r, g, b) => "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);

    return (
        <div className="wrapper"
             style={{
                 height: '3rem',
                 'background-color': `rgb(${r},${g},${b})`,
                 display: 'flex',
                 'flex-direction': 'column'
             }}>
            <span className="boxColor-span">rgb({r},{g},{b})</span>
            <span className="boxColor-span">{rgbToHex(r, g, b)}</span>
        </div>
    );
}

export default BoxColor;