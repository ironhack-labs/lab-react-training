import './BoxColor.css'

const BoxColor = ({ r, g, b }) => {

    const divStyle = {
        backgroundColor: 'rgb(' + r + ',' + g + ',' + b + ')'
    }

    return (
        <div className='boxText' style={divStyle}>rgb({r},{g},{b})</div>
    )

}

export default BoxColor