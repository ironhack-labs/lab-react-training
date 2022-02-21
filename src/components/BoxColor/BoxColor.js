import './BoxColor.css'

const BoxColor = ({ r, g, b }) => {

    const boxColorStyle = {
        backgroundColor: `rgb(${r},${g},${b})`
    }

    return (
        <article className="BoxColor" style={boxColorStyle}>
            <h5>rgb({r},{g},{b})</h5>
        </article>
    )
}

export default BoxColor