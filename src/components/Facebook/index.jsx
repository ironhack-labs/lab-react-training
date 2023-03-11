import profiles from '../../data/berlin.json'
import './index.css'

import React, { Component } from 'react';

class Facebook extends Component {
  state = {
    profilesToShow: profiles,
    filter: ''
  }

  render() {
    const handleClick = (event) => {
      this.setState({filter: event.target.value})
    }

    return (
      <div className='Facebook'>
        <div className='btn-container'>
          <button onClick={handleClick} value=''>All</button>
          <button onClick={handleClick} value='England'>England</button>
          <button onClick={handleClick} value='USA'>USA</button>
          <button onClick={handleClick} value='Malaysia'>Malaysia</button>
          <button onClick={handleClick} value='Germany'>Germany</button>
        </div>
        {profiles.map(profile => {
          return <div key={profile.lastName} style={profile.country === this.state.filter ? {backgroundColor: '#A1DBEB'} : null} className='profile'>
            <img src={profile.img}/>
            <div>
              <p><b>First name:</b> {profile.firstName}</p>
              <p><b>Last name:</b> {profile.lastName}</p>
              <p><b>Country:</b> {profile.country}</p>
              <p><b>Type:</b> {profile.isStudent ? 'Student' : 'Teacher'}</p>
            </div>
          </div>
        })}
      </div>
    );
  }
}

export default Facebook;