import React from "react";

function IdCard(props) {
    return (
      <div>
        <p>
        <b>lastName:</b> {props.lastName}
        </p>
        <p>
          <b>firstName :</b> {props.firstName}
        </p>
      </div>
    
      <p>
      <b>gender:</b> {props.gender}
      </p>
      <p>
        <b>height :</b> {props.height}
      </p>
    </div>
  
    <p>
    <b>birth:</b> {props.birth}
    </p>
    <p>
      <b>picture :</b> {props.picture}
    </p>
  </div>
  
  );
}


export default IdCard;
  