// components/Facebook.js

import React, { Component } from 'react';
import FacebookCard from './FacebookCard';
import profiles from '../data/berlin.json';

class Facebook extends Component {
  state = {
  }

  render() {
    console.log('profiles', profiles);
    return (
      <div className='Facebook'>
        {profiles.map((profile, index) => {
          const { firstName, lastName, country, isStudent, img } = profile;
          return <FacebookCard
            key={index}
            firstName={firstName}
            lastName={lastName}
            country={country}
            isStudent={isStudent}
            img={img}
          />      
        })}
      </div>
    );
  }
}

export default Facebook;
