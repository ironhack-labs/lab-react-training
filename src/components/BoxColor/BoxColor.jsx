import './BoxColor.css'

const BoxColor = ({ r, g, b }) => {


    return (
        <div className="box" style={{ backgroundColor: `rgb(${r},${g},${b})` }}>
            <p>rgb({r},{g},{b})</p>

        </div>
    )
}

export default BoxColor