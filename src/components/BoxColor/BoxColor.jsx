import './BoxColor.css'

const BoxColor = (props) => {
    console.log(props)

    let divStyle = {backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`}

    return(
        <>
        <div style={divStyle}>
        <p className='colourNumbers' >
            rgb({props.r}, {props.g}, {props.b})
        </p>
        </div>
    </>
    )
}

export default BoxColor;