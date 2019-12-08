import React from "react";
import { Media} from 'reactstrap';

function IdCard(props){
return(
 <div className="IdCard"> 
<Media className="MediaContainer">
  <Media left href="#">
    <Media src= {props.picture} height="200" width="200" alt="ID Pic" />
  </Media>
  <Media body className="props-container">
          <p><span className="label-id">First name: </span>{props.firstName}</p>
          <p><span className="label-id">Last name: </span>{props.lastName} </p>
          <p><span className="label-id">Gender: </span>{props.gender} </p>
          <p><span className="label-id">Height: </span>{props.height} cm</p>
          <p><span className="label-id">Birth: </span> {props.birth}</p>
  </Media>
</Media>
</div>
);
};
export default IdCard;