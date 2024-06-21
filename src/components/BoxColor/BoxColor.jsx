import './BoxColor.css'
const BoxColor = ({ r, g, b }) => {

    const bgColor = { backgroundColor: `rgb(${r}, ${g}, ${b})` }

    return (
        <div className="BoxColor" style={bgColor}>

            <h1>RGB({r},{g},{b})</h1>

        </div>
    )

}
export default BoxColor