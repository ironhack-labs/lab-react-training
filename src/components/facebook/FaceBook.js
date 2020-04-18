import React, { Component } from 'react';
import profiles from '../../data/berlin.json';


class FaceBook extends Component {

    state = {
        country: "all"
    }
    
    handleClick = (country) => () => {
        this.setState(
            {country}
        )
    }

    render() {
        const {country} = this.state;
        const filteredProfiles = country === "all" ? profiles : profiles.filter(profile => profile.country === this.state.country);
        const countriesList = [...new Set (profiles.map((profile) => {
            return profile.country
        }))]
        return (
            <div>
            <button key={`button-all`} onClick={this.handleClick("all")}>all</button>
            { countriesList.map((country, i) => {
                return (
                    <button key={`button-${i}`} onClick={this.handleClick(country)}>{country}</button>
                )
            })}
            { filteredProfiles.map((profile, i) => {
                const {img, country, lastName, firstName, isStudent} = profile;
                return (
                    <div className="IdCard box" key={`profile-${i}`}>
                        <div className="left"><img style={{maxWidth:"200px"}} src={img} alt={firstName} /></div>
                        <div className="right">
                            <div>First name: {firstName}</div>
                            <div>Last name: {lastName}</div>
                            <div>Country: {country}</div>
                            <div>Type: {isStudent ? "Student" : "Teacher"}</div>
                        </div>
                    </div>
                )
            })}
            </div>
        );
    }
};
    
export default FaceBook;