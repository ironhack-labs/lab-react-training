import './BoxColor.css'

const BoxColor = (props) => {

    const {r, g, b} = props
    
    let toHex = (value) => {
        return value.toString(16)
    }

    let rgbToHex = (r, g, b) => {
        return toHex(r)+toHex(g)+toHex(b)
    }

    return (
        
        <div className='boxColor' style={{backgroundColor:`rgb(${r},${g},${b})`}}>
            <p>rgb({r}, {g}, {b})</p>
            <p>#{rgbToHex(r,g,b) }</p>
        </div>
    )

}

export default BoxColor