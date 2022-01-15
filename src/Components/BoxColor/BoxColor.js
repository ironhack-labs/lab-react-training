export const BoxColor = (props) => {
    const {r, g, b} = props;

    const colorStyle = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`
    }

    return (
        <div className="BoxColor" style={colorStyle}>
            <p>rgb({r},{g},{b})</p>
        </div>
    )
}