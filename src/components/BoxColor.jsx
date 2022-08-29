import "./BoxColor.styles.css"

export const BoxColor = (props) => {
 const {hex} = props

 return(
  <div className="boxColor" style={{backgroundColor: hex }}>
   <p>{hex}</p>
  </div>
 )
}