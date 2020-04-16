import React, { Component } from "react";

class IdCard extends Component {
	render() {

    return(

    <div className ="container box">
        <ul className="child">
            <img src= {this.props.picture} alt=""  />  
        </ul>

        <ul className="child">
                <li>    <strong>First Name: </strong>   {this.props.firstName} </li> 
                <li>    <strong>Last Name:  </strong>   {this.props.lastName}  </li>                
                <li>    <strong>Gender:     </strong>   {this.props.gender}    </li>                        
                <li>    <strong>Height:     </strong>   {this.props.height}    </li>                         
                <li>    <strong>Birth:      </strong>   {this.props.birth.toDateString()}  </li>         
        </ul>
    </div>
        
    )
}}
    
  




       
export default IdCard;
