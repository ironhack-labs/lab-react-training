import './BoxColor.css'

const BoxColor = ({ r, g, b }) => {

    const style = { backgroundColor: `rgb(${r},${g},${b})` }

    return (
        <div className='BoxColor' style={style} >

            <p>
                rgb({r},{g},{b})
            </p>

        </div>
    )
}

export default BoxColor