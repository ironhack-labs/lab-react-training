import "./Random.styles.css"

export const Random = (props) => {
 const {min, max, className="random"} = props

 const randomValue = () => {
  return Math.floor(Math.random() * (max - min)) + min
 }

 return(
  <div className={className}>
   <p>Random value between {min} and {max} {`=>`} {randomValue()}</p>
  </div>
 )
}