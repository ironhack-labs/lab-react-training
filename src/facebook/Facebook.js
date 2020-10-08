import React, { Component } from 'react'
import profiles from '../data/berlin.json';


export default class Facebook extends Component {

    //get the unique countries
    countries = [...new Set(profiles.map(profile => profile.country))]

    state = {
        selected: null
    }

    handleButtonClick(country) {
        this.setState(prevState => ({
            selected: country
        }))
    }

    render() {
        return (
            <div>
                {/* buttons */}
                {this.countries.map(country => (
                    <button
                        key={country}
                        style={{
                            backgroundColor: this.state.selected === country ? 'lightblue' : 'white'
                        }}
                        onClick={() => this.handleButtonClick(country)} >
                        {country}
                    </button>
                ))}

                {/* profiles */}
                {profiles.map((profile, i) => {
                    return (
                        <div key={i} style={{
                            backgroundColor: profile.country === this.state.selected ? 'lightblue' : 'white'
                        }} >
                            <div><img width="100" src={profile.img} /></div>
                            <div>{profile.firstName}</div>
                            <div>{profile.lastName}</div>
                            <div>{profile.country}</div>
                            <div>{profile.isStudent ? 'Student' : 'Teacher'}</div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

