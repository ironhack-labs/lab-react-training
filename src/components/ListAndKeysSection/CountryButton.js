import React, { Component } from 'react';
import './CountryButton.css';

export default class CountryButton extends Component {
  render() {
    const style = {
      backgroundColor: this.props.active ? 'lightblue' : 'white',
    };

    return (
      <div>
        <button
          style={style}
          onClick={this.props.clickHandler}
          className="country-btn"
        >
          {this.props.country}
        </button>
      </div>
    );
  }
}
