import './BoxColor.css';

const BoxColor = ({r, g, b}) => {
    const divStyle = {
        backgroundColor: `rgb(${r},${g},${b})`
    }
    return (
        <div className="boxColor" style={divStyle}>
            <span>rgb({r},{g},{b})</span>
        </div>
    )
}

export default BoxColor;