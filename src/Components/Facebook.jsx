import React, { Component } from 'react'
import profiles from '../data/berlin.json';
import '../styles/Facebook.css'

export class Facebook extends Component {

    state = {
        berlinProfiles: profiles,
        selectedCountry: ""
    }

    handleSelectByCountry = (country) => {
        this.setState({selectedCountry: country })
    }

    render() {
        const countryList = [...new Set(profiles.map(profile => profile.country))]

        return (
            <div>
            <nav>
                {countryList.map(country => 
                    <button style= { {backgroundColor: this.state.selectedCountry === country ? '#56B8E3' : 'white'} } className='BtnCountry' onClick={() => this.handleSelectByCountry(country)}>{country}</button>  
                )}
            </nav>
            {this.state.berlinProfiles.map((person, index) => 
                <div key={index} style= { {backgroundColor: this.state.selectedCountry === person.country ? '#56B8E3' : 'white'}} className="Facebook">
                    <img src={person.img} alt="portrait" />
                    <ul>
                        <li><b>First Name:</b> {person.firstName}</li>
                        <li><b>Last Name:</b> {person.lastName}</li>
                        <li><b>Country:</b> {person.country}</li>
                        <li><b>Type:</b> {person.isStudent ? "Student" : "Teacher"}</li>
                    </ul>
                </div>
            )}
            </div>
        )
    }
}

export default Facebook
