import React from "react";


function IdCard(props) {
  console.log(props.birth)
return (
    <div className="IdCard">
   <img src={props.picture} alt="profile" />
   <ul>
   
 <li> <span>lastName=</span>{props.lastName}</li>
 <li> <span>firstName=</span>{props.firstName} </li>
 <li>   <span>gender=</span>{props.gender}   </li>
 <li> <span>height=</span>{props.height}</li>
 <li> <span>birth=</span>{props.birth.getDay()}-{props.birth.getMonth()+1}-{props.birth.getFullYear()}</li>
 

   </ul>
   </div>
   
);
}


export default IdCard;