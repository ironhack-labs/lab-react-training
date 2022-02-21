import './BoxColor.css'

const BoxColor = (props) => {

    const { r, g, b } = props
       
    return (

        <article className='BoxColor' style={{backgroundColor: `rgb(${r}, ${g}, ${b})`}}>

            <p>rgb ({r}, {g}, {b}) </p>
          

        </article>
    )}


export default BoxColor