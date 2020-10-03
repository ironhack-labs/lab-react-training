import React, { Component } from 'react'
import IdCard from './IdCard'
import profiles from '../data/berlin.json'

export default class FaceBook extends Component {
    state = {
        countries: []
    }

    componentDidMount = () => {
        const countryArray = [];

        profiles.forEach(profile => {
            !countryArray.includes(profile.country) && countryArray.push(profile.country);
        })

        this.setState((preState) => ({
            countries: countryArray
        }))
    }

    render() {
        return (
            <div>
                {this.state.countries.map((country, index) => 
                    <button key={index}>{country}</button>
                )}
                {profiles.map((profile, index) =>
                    <IdCard
                        key={profile.firstName + index}
                        lastName={profile.lastName}
                        firstName={profile.firstName}
                        country={profile.country}
                        type={profile.isStudent}
                        picture={profile.img}
                    />
                )}
            </div>
        )
    }
}
