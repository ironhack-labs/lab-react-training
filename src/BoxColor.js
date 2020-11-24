import React, { Component } from 'react';
import './BoxColor.css';

class BoxColor extends Component {
    render(){
      /*   let r = this.props.r;
        let g = this.props.g;
        let b = this.props.b; */
        const divStyle = {
            //backgroundcolor: rgb(this.props.r,this.props.g,this.props.b),
            WebkitTransition: 'all', // note the capital 'W' here
            msTransition: 'all' // 'ms' is the only lowercase vendor prefix
          };
          
    return( 
    <div style={divStyle} className="box-color">
    rgb(this.props.r, this.props.g, this.props.b)
    </div>
    );
    }
}

export default BoxColor;

