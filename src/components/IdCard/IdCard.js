import Picture from "./Picture"
import FirstName from "./FirstName"
import LastName from "./LastName"
import Gender from "./Gender"
import Height from "./Height"
import Birth from "./Birth"

function IdCard (props){
  let date = props.birth.toDateString()

  return(
    <div className="d-flex p-2 border border-2 border-warning bg-info m-1 col-4">
      <Picture picture={props.picture}/>
              <div className="d-block px-3">
              <FirstName firstname={props.firstname}/>
                <LastName lastname={props.lastname}/>
                <Gender gender={props.gender}/>
                <Height height={props.height}/>
                <Birth birth={date}/>
              </div>
    </div>
  )
}
export default IdCard