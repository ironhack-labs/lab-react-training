import React, { Component } from 'react'
import profiles from '../data/berlin.json';

export default class FaceBook extends Component {
    state = {
        profiles: []
    }

    render() {
        return (
        <div>{profiles.map(profile => {
            return (
                <div style={{width: '500px', height: '400px', border: '1px solid black'}}>
                        <img src={profile.img} style={{width: '200px'}}/>
                        <p>First name:{profile.firstName}</p>
                        <p>Last name: {profile.lastName}</p>
                        <p>Country: {profile.country}</p>
                        <p>Type: {profile.isStudent ? 'Student' : 'Teacher'}</p>
                </div>
            )
        })}</div>
 )
}
}
