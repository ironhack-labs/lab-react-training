import React, { Component } from 'react';
import profiles from '../data/berlin.json';

class Facebook extends Component {

  state = {currCountry: ''}

  handleClick = (e) => {
    e.preventDefault();
    console.log(e.target.innerText);
    this.setState({currCountry: e.target.innerText})
  }

  render() {
    let items = [];
    let countries = [];
    
    for(let profile of profiles){
      if(!countries.includes(profile.country)) countries.push(profile.country);
  
      items.push(
        <div className={profile.country === this.state.currCountry ? 'active':''} key={Math.random()}>
          <img src={profile.img} alt={profile.firstName+' '+profile.lastName}/>
          <div>
            <p><b>First Name</b>: {profile.firstName}</p>
            <p><b>Last Name</b>: {profile.lastName}</p>
            <p><b>Country</b>: {profile.country}</p>
            <p><b>Type</b>: {profile.isStudent ? 'Student':'Teacher'}</p>
          </div>
        </div>
      )
  
    }
    countries = countries
      .sort((a,b)=>a.localeCompare(b))
      .map(country => (<li onClick={this.handleClick}>{country}</li>));

      return (
      <div className="facebook">
        <ul>{countries}</ul>
        
        {items}
      </div>
    );
  }
}

export default Facebook;