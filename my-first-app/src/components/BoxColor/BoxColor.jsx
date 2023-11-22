const BoxColor = ({ r, g, b }) => {

    const boxStyle = {
        backgroundColor: `rgb(${r},${g},${b})`
    }
    return (
        <>
            <div style={boxStyle}>
                rgb({r}, {g}, {b})
            </div >
        </>
    )

}

export default BoxColor