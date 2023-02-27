import './BoxColor.css'

const BoxColor = props => {

    const { r, g, b } = props

    const rgbColor = `rgb(${r}, ${g}, ${b})`

    const rgbToHex = (c) => {
        const hex = c.toString(16)
        return hex.length == 1 ? '0' + hex : hex
    }

    const hexColor = '#' + rgbToHex(r) + rgbToHex(g) + rgbToHex(b)

    const style = {
        backgroundColor: rgbColor
    }

    return (
        <div className="card" style={style}>
            <div className="block">
                <p>{rgbColor}</p>
                <p>{hexColor}</p>
            </div>
        </div>
    )
}

export default BoxColor