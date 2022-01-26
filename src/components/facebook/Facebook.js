import React from 'react';
import "./Facebook.css"

function Facebook(props) {
  return(
  <div className={props.countryClicked === props.country && "highlight"}>
    {props.firstName}
  </div>
  )
}

export default Facebook;
