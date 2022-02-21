import './BoxColor.css'

const BoxColor = ({r, g, b}) =>{

    return(
        <article className="boxColor" style={{ backgroundColor: `rgb(${r}, ${g}, ${b})`}}>     
        <p>{r},{g},{b}</p>  
        </article>
    )
}

export default BoxColor