import React, { Component } from "react";
import profiles from '../data/berlin.json';

class Facebook extends Component {
    state = {
        profileCountry: "",
        profiles,
    }

    countries = [];

    uniqueCountries = this.state.profiles.map((profiles, index) => {
        this.countries.push(profiles.country);
        this.countries = [...new Set(this.countries)]
        return this.countries;
    })

    updateprofiles = (profiles, country) => {
        return profiles.filter(profile => profile.country === country);
    }

    handleClick = e => {
        let country = e.target.value;
        let { profileCountry, profiles } = this.state;
        profileCountry = country;
        profiles = this.updateprofiles(profiles, profileCountry);
        console.log("profiles:", profiles)
        this.setState({ profileCountry, profiles })
    }

    handleAllClick = () => {
        let { profileCountry, profiles } = this.state;
        profileCountry = "";
        
        this.setState({ profileCountry, profiles });
    }


    render() {
        const countries = this.countries;
        let { profileCountry, profiles } = this.state;
        const { handleClick, handleAllClick } = this;

        return (
            <div>
                <div className="button-container">
                    <button className="all-button" onClick={handleAllClick}>All</button>
                    {countries.map((country, index) => (
                        <button key={index}
                            className="country-button"
                            value={country} onClick={handleClick}
                            style={{ backgroundColor: country === profileCountry ? "lightblue" : "white" }}>
                            {country}
                        </button>
                    ))}
                </div>
                {profiles.map((profiles, index) => (
                    <div key={index} className="idCard">
                        <img className="facebook-img" src={profiles.img} alt="" />
                        <div className="idText">
                            <p><span className="fb-text">First name: </span>{profiles.firstName}</p>
                            <p><span className="fb-text">Last name: </span>{profiles.lastName}</p>
                            <p>
                                <span className="fb-text" style={{ backgroundColor: profiles.country === profileCountry ? "lightblue" : "white" }}>Country: </span>
                                <span style={{ backgroundColor: profiles.country === profileCountry ? "lightblue" : "white" }}>{profiles.country}</span>
                            </p>
                            <p><span className="fb-text">Type: </span>{profiles.isStudent ? "Student" : "Teacher"}</p>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Facebook;