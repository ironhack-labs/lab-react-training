import React, { Component } from 'react';
import './carousal.css';

export default class Carousal extends Component {
    change = () => {
       
            this.props.changeImg();
       
    }
  
    changePrev = (prev) => {
        this.props.goPrev(prev);
    }
    render() {
       this.change();
        
        return (
            <div className="carousal-content">
              <button onClick={() => {this.changePrev(this.props.imgCarousal)}}>Left</button> <img src={this.props.imgCarousal} alt="carousalImage"/>
              <button onClick={this.props.goNext}>Right</button> 
            </div>
        )
    }
}
