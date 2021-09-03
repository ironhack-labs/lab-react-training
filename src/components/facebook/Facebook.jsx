import React from 'react';
import profiles from '../../data/berlin.json';
import './Facebook.css'

export default class Facebook extends React.Component {

  render() {
    return (
      <div>
        {profiles.map((profile) => {
          return(
            <div className='Facebook'>
              <div>
                <img className='Facebook-img' src={profile.img}/>
              </div>
              <div>
                <p><strong>First Name:</strong> {profile.firstName}</p>
                <p><strong>Last Name:</strong> {profile.lastName}</p>
                <p><strong>Country:</strong> {profile.country}</p>
                <p><strong>Type:</strong> {profile.isStudent ? 'Student' : 'Teacher'}</p>
              </div>
            </div>
          )
        })}
      </div>     
    )
  }
}