import React, { Component } from "react";
import Star from "../Star"
import "./style.css";

export default class Rating extends Component {

    rating = (rating) => {
       return (Math.round(rating.children));
    }

  render() {
      const {children} = this.props;
      const stars = [0,1,2,3,4]
    return (
      <div>
          <div className="flex">
            {stars.map((star,index) => 
                <Star value={index} key={index} className={this.rating({children})}/>
            )}
          </div>
      </div>
    );
  }
}