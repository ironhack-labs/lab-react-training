import React, { Component } from 'react';
import "./style.css";

class Random extends Component {

    randomNumber(n1, n2) {
      const num = Math.floor(Math.random() * (n2.max - n1.min + 1)) + n1.min;
      return num;  
    
    }

    render(){
        const { min, max} = this.props;
        
        return ( 
            <div class="box">
                <p> Random value between {min} and {max} => 
                {this.randomNumber({min},{max})}</p>

            </div>
        )
    }
}

export default Random;