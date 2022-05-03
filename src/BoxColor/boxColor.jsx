import './boxColor.css'


const BoxColor = ({ r, g, b }) => {

    let colores = {
         backgroundColor: `rgb(${r},${g},${b})`,
         padding: '40px'
        }

    return (
        <div className='box' style={colores}>
            <p>rgb({r},{g},{b})</p>
      

        </div>
    )
}
export default BoxColor