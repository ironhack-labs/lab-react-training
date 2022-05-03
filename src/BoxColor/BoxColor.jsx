import './BoxColor.css'

const BoxColor = ({ r, g, b }) => {

    let colors = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
        padding: "20px",
        margin: "20px",
        height: "150px"
    }

    return (

        <div style={colors}></div>

    )
}

export default BoxColor