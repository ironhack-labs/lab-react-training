import './BoxColor.css'

const BoxColor = ({ r, g, b, highlighted }) => {

    const toHex = (c) => {
        let hex = c.toString(16)
        return hex.length === 1 ? "0" + hex : hex
    }

    const hexColor = "#" + toHex(r) + toHex(g) + toHex(b)

    const specialClass = highlighted ? 'white' : 'black'

    return (

        <div className={`BoxColor ${specialClass}`} style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}>
            <p> rgb ({r},{g},{b}) </p>
            <p>{hexColor}</p>
        </div>

    )
}

export default BoxColor