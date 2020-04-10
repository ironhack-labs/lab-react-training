import React, { Component } from 'react';
import "./styles.css";

class NameValue extends Component {
    render(){
        const { text, value } = this.props;
        return (
          <div class="flex">
              <p> {text} </p> &nbsp;
              <p> {value}</p>
          </div>  
        )
    }
}

export default NameValue;