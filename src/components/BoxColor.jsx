import '../styles/BoxColor.css'

function BoxColor(props) {
    return (
        <div className='BoxColor' style={{backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`}}>
            <p>rgb({props.r}, {props.g}, {props.b})</p>
        </div>
    )
}

export default BoxColor