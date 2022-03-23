import React, { Component } from 'react';
import profiles from '../../data/berlin.json';
import './FaceBook.css'

class FaceBook extends Component {
    state = {
        countries: [],
        selectedCountry: ''
    }

    createCountriesArray() {
        const countriesArray = []

        profiles.forEach(profile => {
           if (!countriesArray.includes(profile.country)) {
               countriesArray.push(profile.country)
           } 
        })

        this.setState({
            countries: countriesArray
        }) 
    }

    
    checkCountry(country) {
        this.setState({
            selectedCountry: country
        })
        console.log(country)
    }

    deleteCheckCountry() {
        this.setState({
            selectedCountry: ''
        })
    }

    render() {
        return (
            <div>
                <button onClick={() => this.createCountriesArray()}>Get countries</button>
                <div>
                    <button onClick={() => this.deleteCheckCountry()}>All</button>
                    {this.state.countries.map((country, index) => {
                        return (<button key={index} onClick={() => this.checkCountry(country)}>{country}</button>)
                    })}
                </div>

                <div>
                    {profiles.map((profile, index) => {
                        return(
                            <div key={index} className="card" style={{backgroundColor: this.state.selectedCountry === profile.country ? 'pink' : 'white'}}>
                                <div className="profile-img">
                                    <img src={profile.img} />
                                </div>

                                <div>
                                    <p>First name: {profile.firstName}</p>
                                    <p>Last name: {profile.lastName}</p>
                                    <p>Country: {profile.country}</p>
                                    <p>Type: {profile.isStudent ? 'Student' : 'Teacher'}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )

    }
} 


export default FaceBook