import React, {Component} from 'react';


class Rating extends Component {

    getStar(index) {
      if(this.props.children < index) {
        return"./img/star-trans.png";
      }
      return "./img/star.png";
    }

    render() {
      return <div>
                <img src={this.getStar(1)}></img>
                <img src={this.getStar(2)}></img>
                <img src={this.getStar(3)}></img>
                <img src={this.getStar(4)}></img>
                <img src={this.getStar(5)}></img>
              </div>
    }
}

export default Rating;