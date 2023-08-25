const BoxColor = ({ r, g, b }) => {
    const Box = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`
    }
    return (
        <p>rgb(${r}, ${g}, ${b})</p>
    )
}

export default BoxColor