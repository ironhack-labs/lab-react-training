import './BoxColor.css'

const BoxColor = props => {


    const { r, g, b } = props

    const colorStyle = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`
    }


    return (
        <div className='BoxColor' style={colorStyle}>
            <p>{`rgb(${r}, ${g}, ${b})`}</p>
            <p>{`#${r.toString(16)}${g.toString(16)}${b.toString(16)}`}</p>
        </div >
    )
}

export default BoxColor