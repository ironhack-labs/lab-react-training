import React, { Component } from 'react'
import profilesfromJson from '../../data/berlin.json';

export default class Facebook extends Component {
    state ={
        profiles: profilesfromJson
    }

    render() {
    return (
        <div>
            {this.state.profiles.map((profile) => {
                return (
                    <div
                        key={profile.img}
                    >
                        <img src={profile.img} alt=""></img>
                        <p>First Name: {profile.firstName}</p>
                        <p>Last Name: {profile.lastName}</p>
                        <p>Country: {profile.country}</p>
                        <p>Type: {profile.isStudent ? 'Student': 'Teacher'}</p>
                    </div>
                )
            })}
        </div>
    )
    }
}
