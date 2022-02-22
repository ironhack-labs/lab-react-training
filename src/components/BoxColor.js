const BoxColor = ({ r, g, b }) => {

    let Style = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`
    }

    return (
        <div style={Style}>
            rgb({r},{g},{b})
        </div>
    )
}
export default BoxColor

