const BoxColor = ({ r, g, b }) => {

    const coloredBox = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`
    }

    return (
        <>
            <div style={coloredBox}>
                <p>rgb({r},{g},{b})</p>
            </div >
        </>

    )
}

export default BoxColor