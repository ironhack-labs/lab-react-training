import React, { Component } from 'react'
import profiles from '../data/berlin.json'
import FacebookCard from './FacebookCard'
import FacebookButton from './FacebookButton'

class Facebook extends Component {
    constructor(props) {
        super(props)
        this.state = {
            profiles: [...profiles]
        }
    }
    getFacebookCards = () => {
        return this.state.profiles.map(profile => <FacebookCard key={profile.firstName} profile={profile}/>)
    }
    getCountryButtons = () => {
        return this.state.profiles
                            .map(profile => profile.country)
                            .filter((country, i, arr) => arr.indexOf(country) === i)
                            .map(country => <FacebookButton 
                                                    country={country} 
                                                    key={country} 
                                                    selectProfiles ={() => this.selectCountryProfiles(country)} 
                                            />
                            )
    }
    selectCountryProfiles = (country) => {
        const countryProfiles = [...this.state.profiles]
        countryProfiles.forEach(profile => profile.country === country ? profile.isSelected = true : profile.isSelected = false)
        this.setState(() => ({profiles: countryProfiles}))
    }
    render() {
        return (
            <div>
                {this.getCountryButtons()}
                {this.getFacebookCards()}
            </div>
        )
    }
}

export default Facebook
