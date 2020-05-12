import React, { Component } from "react";
import profiles from "../data/berlin.json";

class Facebook extends Component {
    state = {
        profileCountry: "",
        data: profiles,
    }

    countries = [];

    uniqueCountries = this.state.data.map((data, index) => {
        this.countries.push(data.country);
        this.countries = [...new Set(this.countries)]
        return this.countries;
    })

    updateData = (data, country) => {
        return data.filter(profile => profile.country === country);
    }

    handleClick = e => {
        let country = e.target.value;
        let { profileCountry, data } = this.state;
        profileCountry = country;
        data = this.updateData(profiles, profileCountry);
        console.log("Data:", data)
        this.setState({ profileCountry, data })
    }

    handleAllClick = () => {
        let { profileCountry, data } = this.state;
        profileCountry = "";
        data = profiles;
        this.setState({ profileCountry, data });
    }


    render() {
        const countries = this.countries;
        let { profileCountry, data } = this.state;
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
                {data.map((data, index) => (
                    <div key={index} className="idCard">
                        <img className="facebook-img" src={data.img} alt="" />
                        <div className="idText">
                            <p><span className="fb-text">First name: </span>{data.firstName}</p>
                            <p><span className="fb-text">Last name: </span>{data.lastName}</p>
                            <p>
                                <span className="fb-text" style={{ backgroundColor: data.country === profileCountry ? "lightblue" : "white" }}>Country: </span>
                                <span style={{ backgroundColor: data.country === profileCountry ? "lightblue" : "white" }}>{data.country}</span>
                            </p>
                            <p><span className="fb-text">Type: </span>{data.isStudent ? "Student" : "Teacher"}</p>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Facebook;