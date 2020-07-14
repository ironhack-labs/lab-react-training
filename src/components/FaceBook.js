import profilesImported from '../data/berlin.json';
import React, { Component } from 'react'
import IdCard from './IdCard';

const newProfiles = [...JSON.parse(JSON.stringify(profilesImported))]

export class FaceBook extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedCountry: ""
        }
        this.profiles = [...newProfiles]
        this.countriesArray = [...new Set([...this.profiles].map(profile => profile.country))]
        this.componentStyle = country => country === this.state.selectedCountry ? {backgroundColor: "#a3d2e2"} : {backgroundColor: "white"}
    }

    updateSelectedCountry(country) {
        this.state.selectedCountry === country.country ?
            this.setState({selectedCountry: ""}) :
            this.setState({selectedCountry: country.country})
    }

    getCountryButtons(arrOfCountries) {
        const countryButtons = [...arrOfCountries].map((country,index) =>{
            return <button key={index} style={this.componentStyle(country)} onClick={() => this.updateSelectedCountry({country})}>{country}</button>
        })
        return countryButtons
    }

    getFaceBookProfiles(arrOfProfiles) {
        const faceBookProfiles = [...arrOfProfiles].map((profile, index) => {
            const isAStudent = profile.isStudent
            return (
                <IdCard key={index}
                        picture={profile.img}
                        firstName={profile.firstName} 
                        lastName={profile.lastName}
                        country={profile.country}
                        type={isAStudent ? "Student" : "Teacher"} 
                        style={this.componentStyle(profile.country)}
                />
            )
        })
        return faceBookProfiles
    }

    render() {
        return (
            <div>
                <div className="country-buttons">
                    {this.getCountryButtons(this.countriesArray)}
                </div>
                {this.getFaceBookProfiles(this.profiles)}
            </div>
        )
    }
}

export default FaceBook
