import React, { Component } from "react";
import Rating from "./Rating"

let profile = require ("../img/profile.png")

class DriverCard extends Component {
	render() {
                // solo hay dos xq con menos rating bloquean al driver

if (this.props.rate == 4) {
        return (

        <div className ="box driver">
            
        <span>  <img alt ="" src={profile}  />  </span>
        <span className= "driveContent">   
                <strong>  {this.props.name} </strong>
                 {<Rating> 4 </Rating>}
                <p> {this.props.car}     </p>
        </span>
    </div>
        )
}

else if (this.props.rate == 5) {
        return(

                <div className ="box driver">
                        
                    <span>  <img alt ="" src={profile}  />  </span>
                      <span className= "driveContent">   
                            <strong>  {this.props.name} </strong>
                             {<Rating> 5 </Rating>}
                        <p> {this.props.car}     </p>
                    </span>
                </div>
                        
                            
                 )
}

    
}}
    
  




       
export default DriverCard;