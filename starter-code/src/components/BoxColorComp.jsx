import React, { Component } from 'react';

class BoxColorComp extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="card text-center mt-2" >
        <div className= {` ${this.props.bsclass}`}>
        {/* <p>Random value between {this.props.min} and {this.props.max} ==> {randomNumber} </p> */}
        
        <p style={{backgroundColor: "{this.props.bsclass}"}}>{this.props.rgb}</p>
        <p>{this.props.hash}</p>
        </div>
      </div>
     );
  }
}
 
export default BoxColorComp;

