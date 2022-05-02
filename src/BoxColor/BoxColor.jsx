import './BoxColor.css'

const BoxColor = ({ r, b, g}) => { 

    const divStyle ={backgroundColor: `rgb(${r},${g},${b})`}
  
    return (
        <article className='cardBox' style={divStyle}>
            RBG ({r},{b},{g})            
        </article>
        )
    
}

export default BoxColor




  