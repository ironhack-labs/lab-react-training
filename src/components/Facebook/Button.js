import React, { Component } from 'react';
import './Facebook.css';


class Button extends Component {

  clickedCountry = () => {
    const { country, handleCountryClicked} = this.props;
    handleCountryClicked(country)
  }
  render() {
    const { country, selectedCountry } = this.props;
    return (<button className="ButtonCountry" style={{ 'backgroundColor': (selectedCountry === country ? '#a3d2e2' : 'white') }} onClick={this.clickedCountry}>{country} </button>)
  }
}

export default Button; 