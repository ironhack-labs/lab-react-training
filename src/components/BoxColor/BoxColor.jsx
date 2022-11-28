import './BoxColor.css'

const BoxColor = props => {
    const { r, g, b } = props
    const divStyle = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`
    }


    return (
        <div className="BoxColor" style={divStyle}>
            <div className="BoxColor__rgb">rgb({r}, {g}, {b})</div>

        </div>
    )

}
export default BoxColor