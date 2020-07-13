import profiles from '../data/berlin.json';
import React, { Component } from 'react'
import IdCard from './IdCard';
import Button from './Button';

const profilesImported = JSON.parse(JSON.stringify(profiles))
const newProfiles = [...profilesImported]

export class FaceBook extends Component {
    constructor(props) {
        super(props)
        this.state = {
            profiles: newProfiles,
            countriesArray: [],
            selectedCountry: "None"
        }
        this.state.profiles.forEach(profile => {
            if (this.state.countriesArray.indexOf(profile.country) === -1) {
                this.state.countriesArray.push(profile.country)
            }
        })
        this.selectCss = 
        this.countryButtons = this.state.countriesArray.map((country,index) =>{
            return <Button theKey={index} class={this.selectCSS({country})} updateCountryFunction={() => this.updateSelectedCountry({country})} country={country} />
        })
        this.faceBookProfiles = this.state.profiles.map((profile, index) => {
            const isAStudent = profile.isStudent
            return (
                <IdCard key={index}
                        picture={profile.img}
                        firstName={profile.firstName} 
                        lastName={profile.lastName}
                        country={profile.country}
                        type={isAStudent ? "Student" : "Teacher"} 
                 />
            )
        })
    }

    isSelectedCountry(country) {
        if (country.country === this.state.selectedCountry) {
            return true
        }
        return false
    }

    selectCSS(country) {
        console.log(this.isSelectedCountry(country))
        if (this.isSelectedCountry(country)) {
            return "selected-style"
        }
        return "not-selected-style"
    }

    updateSelectedCountry(country) {
        this.setState({
            selectedCountry: country.country
        })
    }

    render() {
        return (
            <div>
                <div className="country-buttons">
                    {this.countryButtons}
                </div>
                {this.faceBookProfiles}
            </div>
        )
    }
}

export default FaceBook
