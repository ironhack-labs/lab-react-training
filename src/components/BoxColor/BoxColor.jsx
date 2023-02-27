
import "./BoxColor.css"
function BoxColor({ r, g, b }) {
    const result = `rgb(${r},${g},${b})`
    const styles = {
        backgroundColor: result
    }
    return (
        <div className="BoxColorContainer" style={styles}>
            <p>{result}</p>
        </div>

    );
}

export default BoxColor;