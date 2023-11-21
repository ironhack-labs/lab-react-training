const BoxColor = (({ r, g, b }) => {

    return (
        <div className="BoxColor" style={{ backgroundColor: `rgb(${r},${g},${b}) ` }}>
            <h2>rgb({r},{g},{b})</h2>
        </div >
    )

})

export default BoxColor