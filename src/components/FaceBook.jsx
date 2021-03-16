import React, { Component } from 'react'
import profiles from './../data/berlin.json';
import './../styles/iteration1.css'

const countries = [...new Set(profiles.map(profile => profile.country))]
console.log(countries)


export default class FaceBook extends Component {

    state = {
        enrichProfiles:  profiles.map(profile => {return {...profile, color:"white"}})
    }

    handleColorCountry = (country) => {
        const enrichProfiles = [...this.state.enrichProfiles] ;
        enrichProfiles.forEach(profile => profile.color = profile.country === country ? "blue" : "white")
        this.setState({enrichProfile: enrichProfiles})
    }

    render() {
        console.log(this.state.enrichProfiles)
        return (
            <div>
                <div className="country-button">
                    {countries.map(country => <button key={country} onClick={() => this.handleColorCountry(country)}>{country}</button>)}
                </div>

                {this.state.enrichProfiles.map((user, index) => 
                <div className="user" key={index} style={{backgroundColor: user.color}}>
                    <div>
                        <img src={user.img} alt="user"/>
                    </div>
                    <div>
                        <ul>
                            <li><strong>First name : </strong>{user.firstName}</li>
                            <li><strong>Last name : </strong>{user.lastName}</li>
                            <li><strong>country : </strong>{user.country}</li>
                            <li><strong>Type : </strong>{user.isStudent ? "Student" : "Professor"}</li>
                        </ul>
                    </div>
                </div>
                )}

            </div>
        )
    }
}
