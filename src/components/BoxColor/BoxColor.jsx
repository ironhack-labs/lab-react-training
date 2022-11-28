
import './BoxColor.css'
const BoxColor = props => {
    const { r, g, b } = props

    const divStyle = {
        color: 'white',
        backgroundColor: `rgba(${r}, ${g}, ${b})`,
        height: '250px',
        lineHeight: '250px',
        fontSize: '32px'
    }

    return (
        <div style={divStyle}><span> rgb({r},{g},{b})</span></div >
    )
}

export default BoxColor