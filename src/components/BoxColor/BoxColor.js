import './BoxColor.css'

const BoxColor = props => {

    const { r, g, b } = props

    return (
        <div style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }} className='boxcolor'>
            {`rgb (${r}, ${g}, ${b})`}
        </div>
    )

}

export default BoxColor