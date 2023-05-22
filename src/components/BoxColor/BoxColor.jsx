import './BoxColor.css'
const BoxColor = ({ boxColorInfo }) => {
    const { r, g, b } = boxColorInfo


    return (
        <div className="StyleRBG" style={{ backgroundColor: `rgb(${r},${g},${b})` }}>
            <p className='center' >rgb ({r}, {g}, {b})</p>
        </div>
    )
}

export default BoxColor

