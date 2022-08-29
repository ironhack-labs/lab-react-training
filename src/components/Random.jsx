import "./Random.styles.css"

export const Random = (props) => {
 const {min, max} = props

 const randomValue = () => {
  return Math.floor(Math.random() * (max - min)) + min
 }

 return(
  <div className="random">
   <p>Random value between {min} and {max} {`=>`} {randomValue()}</p>
  </div>
 )
}