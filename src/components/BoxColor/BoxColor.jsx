import './BoxColor.css'

const BoxColor = ({ r, g, b }) => {

    const cardStyle = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`
    }

    return (
        <article className='rgbbox' style={cardStyle}>
            <p  >rgb({r},{g},{b})</p>
        </article>

    )
}

export default BoxColor