import React from "react"


function Greetings(props) {

    return (
        <div>
          <p>{props.lang}</p>
          {props.children}
        </div>
    )
}




export default Greetings