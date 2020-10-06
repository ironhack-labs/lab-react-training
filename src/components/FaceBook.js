import React, { Component } from 'react'
import IdCard from './IdCard'
// import CountryBtn from './CountryBtn'
import profiles from '../data/berlin.json'

export default class FaceBook extends Component {
    state = {
        countrySelected: ""
    }

    getCountries = () => [...new Set(profiles.map(profile => profile.country))];

    countriesBtnToggle = async (country) => {
        await this.setState(() => ({
            countrySelected: country
        }))
    }

    render() {
        return (
            <div>
                {this.getCountries()?.map((country, index) => 
                    <button 
                        className="btn btn-outline-primary"
                        style={{backgroundColor: this.state.countrySelected === country && "lightblue"}}
                        key={index} 
                        onClick={() => this.countriesBtnToggle(country)} 
                        name={country}>
                            {country}
                        </button>
                )}
                {profiles.map((profile, index) =>
                    <IdCard
                        selectedCountry={this.state.countrySelected}
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
