import React, { Component } from 'react'
import profiles from '../data/berlin.json'
import FacebookCard from './FacebookCard'

class Facebook extends Component {
    getFacebookCards = () => {
        return profiles.map(profile => <FacebookCard key={profile.firstName} profile={profile}/>)
    }
    render() {
        return (
            <div>
                {this.getFacebookCards()}
            </div>
        )
    }
}

export default Facebook
