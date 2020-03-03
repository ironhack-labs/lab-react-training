import React, { Component } from 'react';


class Random extends Component {

  render() {

    const { max,
            min
            } = this.props;
    
    const random = Math.floor(Math.random() * (max - min + 1) + min);

    return( 
      
        
      <div>
        <strong>Random Value between </strong>{min} and {max} => {random};
      </div>
    );
  }
}



export default Random;