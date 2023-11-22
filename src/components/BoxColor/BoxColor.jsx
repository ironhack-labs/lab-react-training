const BoxColor = ({ r, g, b }) => {
    const back = {
        backgroundColor: `rgb(${r},${g},${b})`
    }
    return (
        <div style={back}>
            rgb{r},{g},{b}
        </div>
    )
}


export default BoxColor