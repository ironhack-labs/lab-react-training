const BoxColor = ({ r, g, b }) => {

    const styles = {
        border: "solid",
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
    }

    return (
        <div className="BoxColor" style={styles}>
            <p> rgb({r}, {g}, {b})</p>
        </div>
    )
}
export default BoxColor