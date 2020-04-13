import React, { Component } from "react";

class FaceBook extends Component {
  render () {
    return (
      <div className="idcard-box">
        <img className="idcard-img" src='' alt=""/>
        <div>
          <p><b>First Name: </b></p>
          <p><b>Last Name: </b></p>
          <p><b>Country: </b></p>
          <p><b>Type: </b></p>
        </div>
      </div>
    )
  }
}

export default FaceBook;