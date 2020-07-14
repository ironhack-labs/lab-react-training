import profilesImported from '../data/berlin.json';
import React, { Component } from 'react'
import IdCard from './IdCard';
import Button from './Button';

const newProfiles = [...JSON.parse(JSON.stringify(profilesImported))]

export class FaceBook extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedCountry: ""
        }
        this.profiles = [...newProfiles]
        this.countriesArray = [...new Set([...this.profiles].map(profile => profile.country))] // Create an array of unique countries found in 
                                                                                               // the profiles array
        // this.countryButtons = [...this.countriesArray].map((country,index) =>{

        //     const componentStyle = () => country === this.state.selectedCountry ? {backgroundColor: "blue"} : {backgroundColor: "white"}
        //     return <Button key={index} style={componentStyle()} updateCountryFunction={() => this.updateSelectedCountry({country})} country={country} />
        // })
        // this.faceBookProfiles = [...this.profiles].map((profile, index) => {
        //     const isAStudent = profile.isStudent
        //     return (
        //         <IdCard key={index}
        //                 picture={profile.img}
        //                 firstName={profile.firstName} 
        //                 lastName={profile.lastName}
        //                 country={profile.country}
        //                 type={isAStudent ? "Student" : "Teacher"} 
        //          />
        //     )
        // })
        this.componentStyle = country => country === this.state.selectedCountry ? {backgroundColor: "#a3d2e2"} : {backgroundColor: "white"}
    }

    updateSelectedCountry(country) {
        this.state.selectedCountry === country.country ?
            this.setState({selectedCountry: ""}) :
            this.setState({selectedCountry: country.country})
    }

    render() {
        return (
            <div>
                <div className="country-buttons">
                    {/* {this.countryButtons} ======> doesnt work because "mounting only", not "update" */} 
                    {this.countryButtons = [...this.countriesArray].map((country,index) =>{
                    return <Button key={index} style={this.componentStyle(country)} updateCountryFunction={() => this.updateSelectedCountry({country})} country={country} />
                    })}
                </div>
                {/* {this.faceBookProfiles} */}
                {this.faceBookProfiles = [...this.profiles].map((profile, index) => {
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
                })}
            </div>
        )
    }
}

export default FaceBook
