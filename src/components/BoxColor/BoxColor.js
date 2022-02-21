import './BoxColor.css'

const BoxColor = props => {
    const { r, g, b } = props
    const bgColor = { background: `rgb(${r}, ${g}, ${b})` }

    return (
        <div className='greetP' style={bgColor}>
            <p className="boxColor">{r} {g} {b}</p>
        </div>
    )
}

export default BoxColor