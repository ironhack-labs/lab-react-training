import './BoxColor.css'


function BoxColor(props) {

    const { r, g, b } = props
    const BoxColor = {
        backgroundColor : `rgb(${r}, ${g}, ${b})`
    }

    return (
        <div style={BoxColor} className="box-size">
            <div className='BoxColor'>rgb{'('}{r},{g},{b}{')'}</div>
        </div>
    )
}







export default BoxColor