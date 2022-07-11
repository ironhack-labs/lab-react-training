import './Box-color.css'

const BoxColor = ({ r, g, b }) => {

    const backgroundColor = {
        background: `rgb(${r},${g},${b})`,
    }

    return (
        <div className='Box-color' style={backgroundColor}>
            rgb({r},{g},{b})
        </div>
    )
}

export default BoxColor