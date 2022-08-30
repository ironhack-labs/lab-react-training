import './BoxColor.css'
const BoxColor = (props)=>{
    const {r,g,b} = props
    const color = `rgb(${r},${g},${b})`
    return(
        <div className="BoxColor"style={{background:color}}>
           <p>{color}</p>
        </div>
    )
}
export default BoxColor