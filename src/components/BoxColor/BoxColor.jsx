import('./box-color.css')

const BoxColor = (props) => {
    let backgroundColor = { backgroundColor: `rgb(${props.r},${props.g},${props.b})` }
    return (
        <div className='box-color' style={backgroundColor}>
            <p>rgb({props.r},{props.g},{props.b})</p>
        </div>
    )
}

export default BoxColor