import React, { Component } from 'react'
import profiles from '../data/berlin.json';


export default class Facebook extends Component {
    render() {
        return (
            <div>
                {profiles.map((profile, i) => {
                    return (
                    <div key={i}>
                        <div><img width="100" src={profile.img}/></div>
                        <div>{profile.firstName}</div>
                        <div>{profile.lastName}</div>
                        <div>{profile.country}</div>
                        <div>{profile.isStudent? 'Student' : 'Teacher'}</div>
                    </div>
                    )
                })}
            </div>
        )
    }
}
