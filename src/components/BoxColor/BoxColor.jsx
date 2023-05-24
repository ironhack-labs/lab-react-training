import './BoxColor.css'
const BoxColor = ({ r, g, b }) => {


    return (
        <div className="boxCard" style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}>
            <p><strong>rgb({r}, {g}, {b})</strong></p>
        </div>
    )
}

export default BoxColor