import './BoxColor.css'

const BoxColor = ({ r, g, b }) => {

    let color = {

        backgroundColor: `rgb(${r},${g},${b})`,
        padding: "20px"

    }


    return (
        <div style={color}></div>
    )
}

export default BoxColor