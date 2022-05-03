import './BoxColor.css'

const BoxColor = ({ r, g, b }) => {

    let backgroundColor = `rgb(${r}, ${g}, ${b})`;

    return (
        <div className='boxcolor' style={{ backgroundColor }}>
            {backgroundColor}
        </div>
    )
}

export default BoxColor