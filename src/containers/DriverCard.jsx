import { Rating } from "../components"
import './DriverCard.styles.css'


export const DriverCard = (props) => {
 const {picture, alt, rat, nameDriver, car, license } = props
 return(
  <div className="driverCard">
   <div className="content">
    <div>
     <img className="profilePictureDriver" src={picture} alt={alt} />
    </div>
    <div>
     <h3>{nameDriver}</h3>
     <Rating className="rating" rat={rat}/>
     <p>{car} - {license}</p>
    </div>
   </div>
  </div>
 )
}