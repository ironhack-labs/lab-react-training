import './boxColor.css'

const BoxColor = (props) => {
    const mystyle = {
        backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
    }
    return (
        <div className="boxcolor" style={mystyle}>
            <p className='rgbbox' >rgb({props.r},{props.g},{props.b})</p>
        </div>
    )
}


export default BoxColor