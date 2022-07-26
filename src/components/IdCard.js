import React from 'react';

function IdCard(props) {
    return (
            <div className="IdCard">
              <br />
              <p>
                <b>Last name: </b> {props.lastName}
              </p>
              <p>
                <b>First name: </b> {props.firstName}
              </p>
              <p>
                <b>Gender :</b> {props.gender}
              </p>
              <p>
                <b>Height :</b> {props.height}
              </p>
              <p>
                <b>Birth: </b> {props.birth.toDateString()}
              </p> 
              <p>
                <b>Picture: </b> 
              </p> <img src={props.picture} alt="profilePic"/>
              <br />
            </div>
 );
}

export default IdCard;