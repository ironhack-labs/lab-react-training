import './BoxColor.css'

const BoxColor = ({ r, g, b }) => {


    const bgColor = `rgb(${r}, ${g}, ${b} )`


    return (<div className='box-color' style={{ backgroundColor: bgColor }}></div >)

}

export default BoxColor