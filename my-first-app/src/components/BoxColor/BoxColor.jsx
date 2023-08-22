import './BoxColor.css'

const BoxColor = ({ r, g, b }) => {

    const color = {
        backgroundColor: `rgb(${r},${g},${b})`
    }
    return (
        <div className='Box' style={color}>
            <p>rgb({r},{g},{b})</p>
        </div>



    )
}

export default BoxColor