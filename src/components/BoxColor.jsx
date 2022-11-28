import './BoxColor.css'

const BoxColor = props => {
    const { r, g, b } = props

    const divStyle = {
        background: `rgb(${r},${g},${b})`

    }

    return (<div className='BoxColor' style={divStyle}>
        <p className='color'>rgb({r},{g},{b})</p>
    </div>)
}



export default BoxColor