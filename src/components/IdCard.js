//1. Import
import React, {Component} from "react";
import "../App.css";

// 2. Function || Class & Export
export default class IdCard extends Component {
render({lastName,firstName,gender,height,birth,picture}=this.props){
  return (
 <div className="IdCard">
  <img src={picture} width='150px' height='150px' />
  <ul>
  <li><b>First name:</b>&ensp;{firstName}</li>
  <li><b>Last name:</b>&ensp;{lastName}</li>
  <li><b>Gender:</b>&ensp;{gender}</li>
  <li><b>Height:</b>&ensp;{height}</li>
  <li><b>Birth:</b>&ensp;{firstName}</li>
  </ul>
 </div>
  );
 }
}
