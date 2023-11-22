
const BoxColor = ({ r, g, b }) => {

    const style = {
        backgroundColor: `rgb(${r}, ${g},${b})`
    }

    return (
        <section style={style}>
            <h3>`rgb({r}, {g}, {b})`</h3>

        </section>
    )
}


export default BoxColor