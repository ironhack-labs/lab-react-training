function BoxColor({r, g, b}) {
    return (
        <div style={{backgroundColor: `rgb(${r},${g},${b})`}}>
            {`rgb(${r},${g},${b})`}
        </div>
    )
}

export default BoxColor;
