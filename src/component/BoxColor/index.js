import './BoxStyles.css'

const BoxColor = (props) => {
    const { r, g, b } = props;
    const Style = {
        backgroundColor: `rgb(${r},${g},${b})`
    }
    // const Hex = ( red = 0, green = 0, blue = 0) 

    return(
        <div className='BoxColor' 
        style={Style}>
            <p>{`rgb(${r},${g},${b})`}</p>
        </div>
    )
}

export default BoxColor;