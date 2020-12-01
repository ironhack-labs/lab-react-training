
import React from 'react'

export default function IDCard(props) {
    return (
        <div>
           <img src = {props.picture} />
            <p>
             <b>First Name:</b> {props.firstName}
            </p>
            <p>
            <b>Last Name:</b>{props.lastName}
            </p>
            <p>
             <b>Gender:</b>{props.gender}  
            </p>
            <p>
              <b>Height</b> {props.height}
            </p>
            <p>
               <b>Birth:</b>{props.birth}
            </p>
        </div>
    )
}

