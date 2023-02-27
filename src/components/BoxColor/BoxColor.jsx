import './BoxColor.css'

const BoxColor = ({ r, g, b }) => {

    const divStyle = {
        backgroundColor: `rgb(${r},${g},${b})`,
    }

    return (
        <div className='divColor' style={divStyle}>
            <p>
                rgb({r},{g},{b})
            </p>
        </div>
    )

}

export default BoxColor