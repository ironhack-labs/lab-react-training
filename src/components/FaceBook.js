import React, { Component } from 'react'
import IdCard from './IdCard'
// import CountryBtn from './CountryBtn'
import profiles from '../data/berlin.json'

export default class FaceBook extends Component {
    state = {
        countriesSelected: ["usa"]
    }
    
    // const countryArray = [];

        // profiles.forEach(profile => {
        //     !countryArray.includes(profile.country) && countryArray.push(profile.country);
        // })

        // this.setState((preState) => ({
        //     countriesBtns: countryArray
        // }))

    getCountries = () => [...new Set(profiles.map(profile => profile.country))];

    countriesBtnToggle = (country) => {
        // this.setState((preState) => ({
        //     countriesSelected: !preState.countriesSelected.includes(country) && preState.countriesSelected.push(country)
        // }))
    }

    render() {
        const btnStyle = {
            backgroundColor: "lightblue"
        }
        return (
            <div>
                {this.getCountries()?.map((country, index) => 
                    <button key={index} onClick={() => this.countriesBtnToggle(country)} name={country}>{country}</button>
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
