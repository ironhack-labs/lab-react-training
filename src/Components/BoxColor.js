import React, { Component } from 'react';
import '../BoxColor.css';

// 2. Function || Class & Export
export default class BoxColor extends Component {
    render(){
        const divStyle = {
            WebkitTransition: 'all', 
            msTransition: 'all' 
          };

    return( 
    <div style={divStyle} className="box-color">
    rgb(this.props.r, this.props.g, this.props.b)
    </div>
    );
    }
}
