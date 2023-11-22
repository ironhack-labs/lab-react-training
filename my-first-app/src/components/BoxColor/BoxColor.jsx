import "./BoxColor.css"

const BoxColor = ({ r, g, b }) => {

    return (
        <div className="Rectangle" style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }} >
        </div >
    )
}


export default BoxColor