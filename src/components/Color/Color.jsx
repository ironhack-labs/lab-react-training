import './Color.css'

const Color = ({ r, g, b }) => {
    const color = `rgb(${r},${g},${b})`
    return <div style={{ backgroundColor: color, height: '100px', width: '600px' }}  >
        <p>{color}</p>
    </div >

}
export default Color