import './BoxColor.css'

const BoxColor = ({r, g, b}) => {

   const divStyle = {
       backgroundColor: `rgb(${r}, ${g}, ${b})`
   }


    return (
        <div className='squares' style={divStyle} >
            <p > RGB: ({r},{g},{b})</p>
        </div>
    )
}

export default BoxColor