import profiles from '../data/berlin.json';
import React, { Component } from 'react'
import IdCard from './IdCard';

const profilesImported = JSON.parse(JSON.stringify(profiles))
const newProfiles = [...profilesImported]

export class FaceBook extends Component {
    constructor(props) {
        super(props)
        this.state = {
            profiles: newProfiles,
            countriesArray: [],
            selectedCountry: "None",
            style: {
                backgroundColor: "#a3d2e2"
            }
        }
        this.state.profiles.forEach(profile => {
            if (this.state.countriesArray.indexOf(profile.country) === -1) {
                this.state.countriesArray.push(profile.country)
            }
        })
        this.countryButtons = this.state.countriesArray.map((country,index) =>{
            return <button key={index} style={this.state.style}>{country}</button>
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
