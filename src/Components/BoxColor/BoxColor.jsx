import './BoxColor.css'

const BoxColor = ({ r, g, b }) => {

    const rectangle = {
        color: 'black',
        backgroundColor: `rgb(${r},${g},${b})`,
    };

    return (
        <div className='rectangle' style={rectangle}>
            <p>
                rgb({r},{g},{b})
            </p>

        </div>

    )
}


export default BoxColor;