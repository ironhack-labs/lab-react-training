import './BoxColor.css'

const BoxColor = ({ r, g, b }) => {
    let background = {
        backgroundColor: `rgb(${r},${g},${b})`
    }
    return (
        <div style={background}>
            <p>rgb ({r},{g},{b})</p>

        </div>
    )
}

export default BoxColor