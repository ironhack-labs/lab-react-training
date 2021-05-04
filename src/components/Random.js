import React, { Component } from 'react';

export default class Random extends Component {
  randomNum(mini, maxi) {
    let min = Math.ceil(mini);
    let max = Math.floor(maxi);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  render() {
    return (
      <div className="columns">
        <div className="column">
          <article className="message is-info ">
            <div className="message-body ">
              {this.randomNum(this.props.min, this.props.max)}
            </div>
          </article>
        </div>
      </div>
    );
  }
}
