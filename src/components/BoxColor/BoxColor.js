import './BoxColor.css'

const BoxColor = ({ r, g, b, highlighted }) => {

    const specialClass = highlighted ? 'white' : 'black'

    return (
        <div className={`BoxColor ${specialClass}`} style={{ height: "200px", width: "500px", backgroundColor: `rgb(${r},${g},${b})`, border: "1px black solid", marginBottom: "5px" }}>
            <p> rgb ({r},{g},{b}) </p>
        </div>
    )
}

export default BoxColor

