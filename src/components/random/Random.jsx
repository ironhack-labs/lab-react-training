import React from 'react';
import './Random.css';

class Random extends React.Component {
    
  random(){
   return Math.floor(Math.random() * this.props.max) + this.props.min  
  }

  render() {
    return (
      <div className="card">
        <p>
          Random value between {this.props.min} and {this.props.max} {'=>'} {this.random()}
        
        </p>
      </div>
    );
  }
}
export default Random;
