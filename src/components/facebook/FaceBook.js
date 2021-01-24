import React, { Component } from 'react';
import style from './FaceBook.module.css';

export default class FaceBook extends Component {
  constructor(props) {
    super(props);    
    this.state = {
      selectedCountry: ''
    }
  }

  selectCountryHandler = (e) => {
    e.target.style.backgroundColor = 'lightblue';
    let selectedCountry = e.target.textContent;
    if (selectedCountry === "All") {
      selectedCountry = this.props.profiles
        .map(p => p.country)
        .filter( (c, i, countries) => countries.indexOf(c) === i);
    }

    this.setState({
      selectedCountry: selectedCountry
    });
  }

  render() {
    const profiles = this.props.profiles;
    const countries = this.props.profiles
      .map(p => p.country)
      .filter( (c, i, countries) => countries.indexOf(c) === i);

    return (
      <div className={style.container}>
        <div>
          <button onClick={this.selectCountryHandler}>All</button>
          {countries.map(c => <button onClick={this.selectCountryHandler} key={c}>{c}</button>)}
        </div>

        <div className={style.profiles}>
          {profiles.map(p => {
            const {firstName, lastName, country, img, isStudent} = p;
            return <div className={style.card} key={lastName} style={{backgroundColor: this.state.selectedCountry.includes(country) ? 'lightblue' : 'transparent'} }>
              <img className={style.card__img} src={img} alt={lastName} />
              <div className={style.card__texts}>
                <span><strong>First name:</strong> {firstName}</span>
                <span><strong>Last name:</strong> {lastName}</span>
                <span><strong>Country:</strong> {country}</span>
                <span><strong>Type:</strong> {isStudent ? 'Student' : 'Teacher'}</span>
              </div>
            </div>
          })}
        </div>
      </div>
    )
  }
}
