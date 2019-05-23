import React, { Component } from 'react';

class Greeting extends Component {
  state = {  }
  render() { 
    return (  
      <div className="card mt-2">
        <div className="card-body">
          {this.props.text},{this.props.name}
        </div>
      </div>
    );
  }
}
 
export default Greeting;
