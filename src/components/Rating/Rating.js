import './Rating.css'
import Stars from './Stars.js'


function Rating({children}){
  return(
    <div>
      <Stars value={children}/>
    </div>
  )
}

export default Rating